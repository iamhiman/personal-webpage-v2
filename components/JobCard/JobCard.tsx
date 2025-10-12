import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Months } from "@/utils/constants/constants";
import { IJobCardProps } from "@/utils/typings/typings";
import styles from "./JobCard.module.scss";

const JobCard: NextPage<IJobCardProps> = ({ job }) => {
  return (
    <div className={styles.jobCard} key={job?.id}>
      <h2>{job?.company}</h2>
      <h3>{job?.designation}</h3>
      {job?.logo?.url && (
        <Image
          src={job?.logo?.url}
          alt="company-logo"
          width={90}
          height={40}
          className={styles.companyLogo}
          priority
        />
      )}
      <div className={styles.timeline}>
        {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`}
      </div>
      <div>
        {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`} -{" "}
        {job?.to
          ? `${Months[parseInt(job?.to?.split("-")[1])]}, ${job?.to?.split("-")[0]}`
          : "Present"}
      </div>
      <div className={styles.companyLinks}>
        {job?.companyLinkedin && (
          <Image
            src="/assets/linkedin.webp"
            alt="company-linkedin-link"
            width={30}
            height={30}
            priority
            onClick={() => window.open(job?.companyLinkedin, "_blank")}
          />
        )}
        {job?.companyUrl && (
          <Image
            src="/assets/www.webp"
            alt="company-link"
            width={30}
            height={30}
            priority
            onClick={() => window.open(job?.companyUrl, "_blank")}
          />
        )}
      </div>
    </div>
  );
};

export default JobCard;
