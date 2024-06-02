import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      
      <div className="about_left">
        <h1 className="about_left_head">Hi! I am Aleksei</h1>
        <p className="about_left_text">
          This is my personal page.<br></br>
          I use it for practicing and playing with some interesting technologies. <br></br>
          I have about 4 years of experience as a QA Automation Engineer.
        </p>
        <div className="about_left_socialMedia">
          <img
            src={github.src}
            alt=""
            onClick={() => window.open("https://github.com/liqlos", "_blank")}
          />
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/abukhalov/", "_blank")}
          />
          <img
            src={gmail.src}
            alt=""
            onClick={() => window.open("mailto:alex@bukhalov.com", "_blank")}
          />
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
