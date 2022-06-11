import type { NextPage } from "next";
import { IJobs } from "../typings";
import linkedin from "../assets/linkedin.webp";
import www from "../assets/www.webp";

interface IJobsProps {
  jobs: IJobs[];
}

enum Months {
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
}

export const Jobs: NextPage<IJobsProps> = ({ jobs }) => {
  return (
    <section className="jobs">
      <h1 className="jobs_heading">Work</h1>

      <div className="jobs_timeline_container">
        {jobs?.map(job => (
          <div className="job" key={job?.id}>
            <h2>{job?.company}</h2>
            <h3>{job?.designation}</h3>
            <img src={job?.logo?.url} alt="" className="job_companyLogo" />
            <div className="job_date_beforeLine">
              {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`}
            </div>
            <div className="job_date">
              {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`} -{" "}
              {job?.to
                ? `${Months[parseInt(job?.to?.split("-")[1])]}, ${job?.to?.split("-")[0]}`
                : "Present"}
            </div>
            <div className="job_companyLinks">
              <img
                src={linkedin?.src}
                alt=""
                onClick={() => window.open(job?.companyLinkedin, "_blank")}
              />
              <img src={www?.src} alt="" onClick={() => window.open(job?.companyUrl, "_blank")} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
