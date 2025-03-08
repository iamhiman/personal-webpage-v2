import { useRef } from "react";
import { ISkills } from "../typings/typings";

export const useFilteredSkills = (skills: ISkills[], skillType?: string | string[]) => {
  const filteredSkillRef = useRef<{ filteredSkill: ISkills[] }>({ filteredSkill: [] });

  if (typeof skillType === "string") {
    filteredSkillRef.current.filteredSkill = skills?.filter(skill => skill?.fieldType?.toLowerCase() === skillType);
  } else if (Array.isArray(skillType)) {
    filteredSkillRef.current.filteredSkill = skills.filter(skill => skillType.includes(skill.fieldType as string));
  } else {
    filteredSkillRef.current.filteredSkill = skills?.filter(skill => skill?.proficient === false);
  }

  return { filteredSkill: filteredSkillRef.current.filteredSkill };
};
