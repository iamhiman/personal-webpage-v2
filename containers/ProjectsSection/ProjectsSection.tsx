"use client";

import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { ProjectCard } from "@/components";
import { IProjects, IProjectsSectionProps } from "@/utils/typings/typings";
import { TechStack } from "@/utils/constants/constants";
import styles from "./ProjectsSection.module.scss";

const cx = classNames.bind(styles);

const ProjectsSection: NextPage<IProjectsSectionProps> = ({ projects }) => {
  const [activeTag, setActiveTag] = useState<string>(TechStack.All);
  const [filteredProjects, setFilteredProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    if (activeTag === TechStack.All) {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects?.filter(project =>
      project?.techStack?.some(tech => tech?.text?.toLowerCase()?.includes(activeTag?.toLowerCase())),
    );

    setFilteredProjects(filtered);
  }, [activeTag, projects]);

  return (
    <div className={cx("projects")}>
      <h1 className={cx("projects-heading")}>Personal Projects</h1>
      <div className={cx("projects-filter")}>
        {Object.entries(TechStack).map(([key, value]) => {
          return (
            <div
              key={key}
              onClick={() => setActiveTag(value)}
              className={cx("projects-filter-item", activeTag === value && "active-tag")}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className={cx("projects-cards")}>
        {filteredProjects?.map(project => <ProjectCard key={project?.id} project={project} />)}
      </div>
    </div>
  );
};

export default ProjectsSection;
