import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import { ISkillCardProps } from "@/utils/typings/typings";
import styles from "./SkillCard.module.scss";

const cx = classNames.bind(styles);

const SkillCard: NextPage<ISkillCardProps> = ({ skills, skillName }) => {
  return (
    <div className={cx("skill-card")}>
      <p className={cx("skill-card-heading")}>{skillName}</p>
      <div className={cx("skill-card-container")}>
        {skills?.map(skill => (
          <div
            key={skill?.id}
            className={cx("skill-card-container-item")}
            onClick={() => window.open(skill?.url, "_blank")}
          >
            <Image src={skill?.image?.url} alt="skill-url" width={50} height={50} priority />
            <p>{skill?.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
