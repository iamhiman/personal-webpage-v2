import type { NextPage } from "next";
import { IProjects } from "../typings";
import Github from "../assets/github.webp";
import Web from "../assets/www.webp";
import { useEffect, useState } from "react";

interface IProjectsProps {
  projects: IProjects[];
}

export const Projects: NextPage<IProjectsProps> = ({ projects }) => {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    if (activeTag === "all") {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects?.filter(project =>
      project?.techStack?.some(tech =>
        tech?.text?.toLowerCase()?.includes(activeTag?.toLowerCase())
      )
    );

    setFilteredProjects(filtered);
  }, [activeTag, projects]);

  return (
    <>
      <h1 className="projects_heading">Projects</h1>
      <div className="projects_filter">
        <div className="projects_filter_box">
          <div
            onClick={() => setActiveTag("all")}
            className={`projects_filter_box_item ${activeTag === "all" ? "activeTag" : ""}`}
          >
            All
          </div>
          <div
            onClick={() => setActiveTag("react")}
            className={`projects_filter_box_item ${activeTag === "react" ? "activeTag" : ""}`}
          >
            React
          </div>
          <div
            onClick={() => setActiveTag("typescript")}
            className={`projects_filter_box_item ${activeTag === "typescript" ? "activeTag" : ""}`}
          >
            TypeScript
          </div>
          <div
            onClick={() => setActiveTag("javascript")}
            className={`projects_filter_box_item ${activeTag === "javascript" ? "activeTag" : ""}`}
          >
            JavaScript
          </div>
          <div
            onClick={() => setActiveTag("php")}
            className={`projects_filter_box_item ${activeTag === "php" ? "activeTag" : ""}`}
          >
            PHP
          </div>
          <div
            onClick={() => setActiveTag("c++")}
            className={`projects_filter_box_item ${activeTag === "c++" ? "activeTag" : ""}`}
          >
            C++
          </div>
        </div>
        <div className="projects_filter_cardsBox">
          {filteredProjects?.map(project => (
            <div key={project?.id} className="projects_filter_cardsBox_card">
              <img src={project?.image?.url} alt="" className="projects_filter_cardsBox_card_img" />
              <p className="projects_filter_cardsBox_card_title">{project?.title}</p>
              <div className="projects_filter_cardsBox_card_techStack">
                {project?.techStack?.map(stack => {
                  if (stack?.text?.toLowerCase() !== "all") {
                    return (
                      <span
                        key={stack?.text}
                        className="projects_filter_cardsBox_card_techStack_tech"
                      >
                        {stack?.text}
                      </span>
                    );
                  }
                })}
              </div>
              <p className="projects_filter_cardsBox_card_description">{project?.description}</p>
              <div className="projects_filter_cardsBox_card_links">
                <img
                  src={Github.src}
                  alt=""
                  onClick={() => window.open(project?.githubLink, "_blank")}
                  className={`${project?.demoLink && "margin-right"}`}
                />
                {project?.demoLink && (
                  <img
                    src={Web.src}
                    alt=""
                    onClick={() => window.open(project?.demoLink, "_blank")}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
