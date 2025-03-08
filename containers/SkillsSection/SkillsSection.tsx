import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { ISkillsSectionProps } from "@/utils/typings/typings";
import { SKILLSET } from "@/utils/constants/constants";
import styles from "./SkillsSection.module.scss";
import { SkillCard } from "@/components";

const cx = classNames.bind(styles);

const SkillsSection: NextPage<ISkillsSectionProps> = ({ skills }) => {
  const languages = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.LANGUAGES);
  const frontend = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.FRONTEND);
  const uilibraries = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.UI_LIBRARIES);
  const backend = skills?.filter(
    skill =>
      skill?.fieldType?.toLowerCase() === SKILLSET.BACKEND || skill?.fieldType?.toLowerCase() === SKILLSET.DATABASE,
  );
  const headlessCms = skills?.filter(skill => skill?.fieldType?.toLowerCase() === SKILLSET.HEADLESS_CMS);
  const testing_tools = skills?.filter(
    skill => skill?.fieldType?.toLowerCase() === SKILLSET.TESTING || skill?.fieldType?.toLowerCase() === SKILLSET.TOOLS,
  );
  const familiar = skills?.filter(skill => skill?.proficient === false);

  return (
    <div className={cx("skills")}>
      <h1 className={cx("skills-heading")}>Skills</h1>
      <div className={cx("skills-container")}>
        <SkillCard skills={languages} skillName="Languages" />
        <SkillCard skills={frontend} skillName="Frontend" />
        <SkillCard skills={uilibraries} skillName="UI Libraries" />
        <SkillCard skills={backend} skillName="Backend & Database" />
        <SkillCard skills={headlessCms} skillName="Headless CMS" />
        <SkillCard skills={testing_tools} skillName="Testing &amp; Other Tools" />
        <SkillCard skills={familiar} skillName="Familiar" />
      </div>
    </div>
  );
};

export default SkillsSection;
