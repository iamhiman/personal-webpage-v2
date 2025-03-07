import type { NextPage } from "next";
import { IProjects, TECHSTACK } from "../utils/typings/typings";
import Github from "../assets/github.webp";
import Web from "../assets/www.webp";
import { useEffect, useState } from "react";

interface IProjectsProps {
  projects: IProjects[];
}

export const Projects: NextPage<IProjectsProps> = ({ projects }) => {
  const [activeTag, setActiveTag] = useState<string>(TECHSTACK.ALL);
  const [filteredProjects, setFilteredProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    if (activeTag === TECHSTACK.ALL) {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects?.filter(project =>
      project?.techStack?.some(tech => tech?.text?.toLowerCase()?.includes(activeTag?.toLowerCase())),
    );

    setFilteredProjects(filtered);
  }, [activeTag, projects]);

  return (
    <>
      <h1 className="projects_heading">Personal Projects</h1>
      <div className="projects_filter">
        <div className="projects_filter_box">
          <div
            onClick={() => setActiveTag(TECHSTACK.ALL)}
            className={`projects_filter_box_item ${activeTag === TECHSTACK.ALL ? "activeTag" : ""}`}
          >
            All
          </div>
          <div
            onClick={() => setActiveTag(TECHSTACK.NEXTJS)}
            className={`projects_filter_box_item ${activeTag === TECHSTACK.NEXTJS ? "activeTag" : ""}`}
          >
            NextJS
          </div>
          <div
            onClick={() => setActiveTag(TECHSTACK.REACT)}
            className={`projects_filter_box_item ${activeTag === TECHSTACK.REACT ? "activeTag" : ""}`}
          >
            React
          </div>
          <div
            onClick={() => setActiveTag(TECHSTACK.TYPESCRIPT)}
            className={`projects_filter_box_item ${activeTag === TECHSTACK.TYPESCRIPT ? "activeTag" : ""}`}
          >
            TypeScript
          </div>
          <div
            onClick={() => setActiveTag(TECHSTACK.JAVASCRIPT)}
            className={`projects_filter_box_item ${activeTag === TECHSTACK.JAVASCRIPT ? "activeTag" : ""}`}
          >
            JavaScript
          </div>
          <div
            onClick={() => setActiveTag(TECHSTACK.PHP)}
            className={`projects_filter_box_item ${activeTag === TECHSTACK.PHP ? "activeTag" : ""}`}
          >
            PHP
          </div>
          <div
            onClick={() => setActiveTag(TECHSTACK.CPP)}
            className={`projects_filter_box_item ${activeTag === TECHSTACK.CPP ? "activeTag" : ""}`}
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
                  if (stack?.text?.toLowerCase() !== TECHSTACK.ALL) {
                    return (
                      <span key={stack?.text} className="projects_filter_cardsBox_card_techStack_tech">
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
                  <img src={Web.src} alt="" onClick={() => window.open(project?.demoLink, "_blank")} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
