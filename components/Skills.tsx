import type { NextPage } from "next";
import { ISkills } from "../typings";
import { Skill } from "./Skill";

interface ISKillsProps {
  skills: ISkills[];
}

export const Skills: NextPage<ISKillsProps> = ({ skills }) => {
  const languages = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "languages");
  const frontend = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "frontend");
  const uilibraries = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "uilibraries");
  const headlessCms = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "headless cms");
  const testing_tools = skills?.filter(
    skill =>
      skill?.fieldType?.toLowerCase() === "testing" || skill?.fieldType?.toLowerCase() === "tools"
  );
  const familiar = skills?.filter(skill => skill?.proficient === false);

  return (
    <section className="skills">
      <h1 className="skills_heading">Skills</h1>
      <div className="skills_box">
        <Skill skills={languages} skill="Languages" />
        <Skill skills={frontend} skill="Frontend" />
        <Skill skills={uilibraries} skill="UI Libraries" />
        <Skill skills={headlessCms} skill="Headless CMS" />
        <Skill skills={testing_tools} skill="Testing &amp; Tools" />
        <Skill skills={familiar} skill="Familiar" />
      </div>
    </section>
  );
};
