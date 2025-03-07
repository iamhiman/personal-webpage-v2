import type { NextPage } from "next";
import { ISkills } from "../utils/typings/typings";

interface ISkillProps {
  skills: ISkills[];
  skill: string;
}

export const Skill: NextPage<ISkillProps> = ({ skills, skill }) => {
  return (
    <div className="skills_box_container">
      <p className="skills_box_container_heading">{skill}</p>
      <div className="skills_box_container_row">
        {skills?.map((skill: ISkills) => (
          <div
            key={skill?.id}
            className="skills_box_container_row_card"
            onClick={() => window.open(skill?.url, "_blank")}
          >
            <img src={skill?.image?.url} alt="" />
            <p>{skill?.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
