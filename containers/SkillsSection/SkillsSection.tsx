import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { SkillCard } from "@/components";
import { ISkillsSectionProps } from "@/utils/typings/typings";
import { SKILLSET } from "@/utils/constants/constants";
import { useFilteredSkills } from "@/utils/hooks/useFilteredSkills";
import styles from "./SkillsSection.module.scss";

const cx = classNames.bind(styles);

const SkillsSection: NextPage<ISkillsSectionProps> = ({ skills }) => {
  const { filteredSkill: languages } = useFilteredSkills(skills, SKILLSET.LANGUAGES);
  const { filteredSkill: frontend } = useFilteredSkills(skills, SKILLSET.FRONTEND);
  const { filteredSkill: uilibraries } = useFilteredSkills(skills, SKILLSET.UI_LIBRARIES);
  const { filteredSkill: headlessCms } = useFilteredSkills(skills, SKILLSET.HEADLESS_CMS);
  const { filteredSkill: backend } = useFilteredSkills(skills, [SKILLSET.BACKEND, SKILLSET.DATABASE]);
  const { filteredSkill: testing_tools } = useFilteredSkills(skills, [SKILLSET.TESTING, SKILLSET.TOOLS]);
  const { filteredSkill: familiar } = useFilteredSkills(skills);

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
