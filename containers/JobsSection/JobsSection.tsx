import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { JobCard } from "@/components";
import { IJobsSectionProps } from "@/utils/typings/typings";
import styles from "./JobsSection.module.scss";

const cx = classNames.bind(styles);

const JobsSection: NextPage<IJobsSectionProps> = ({ jobs }) => {
  return (
    <div className={cx("jobs")}>
      <h1 className={cx("jobs-heading")}>Work Experience</h1>
      <div className={cx("jobs-timeline-container")}>{jobs?.map(job => <JobCard key={job?.id} job={job} />)}</div>
    </div>
  );
};

export default JobsSection;
