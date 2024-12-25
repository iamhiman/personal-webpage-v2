import type { NextPage } from "next";
import { ISkills, SKILLSET } from "../typings";
import { Skill } from "./Skill";

interface ISKillsProps {
  skills: ISkills[];
}

export const Skills: NextPage<ISKillsProps> = ({ skills }) => {
  const languages = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.LANGUAGES);
  const frontend = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.FRONTEND);
  const uilibraries = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.UI_LIBRARIES);
  const backend = skills?.filter(
    skill =>
      skill?.fieldType?.toLowerCase() === SKILLSET.BACKEND || skill?.fieldType?.toLowerCase() === SKILLSET.DATABASE
  );
  const headlessCms = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.HEADLESS_CMS);
  const testing_tools = skills?.filter(
    skill => skill?.fieldType?.toLowerCase() === SKILLSET.TESTING || skill?.fieldType?.toLowerCase() === SKILLSET.TOOLS
  );
  const familiar = skills?.filter(skill => skill?.proficient === false);

  return (
    <>
      <h1 className="skills_heading">Skills</h1>
      <div className="skills_box">
        <Skill skills={languages} skill="Languages" />
        <Skill skills={frontend} skill="Frontend" />
        <Skill skills={uilibraries} skill="UI Libraries" />
        <Skill skills={backend} skill="Backend & Database" />
        <Skill skills={headlessCms} skill="Headless CMS" />
        <Skill skills={testing_tools} skill="Testing &amp; Other Tools" />
        <Skill skills={familiar} skill="Familiar" />
      </div>
    </>
  );
};
