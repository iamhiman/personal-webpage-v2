import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Himanshu Kashyap</h1>
        <p className="about_left_text">
          Hi! I am Himanshu Kashyap from Dehradun, Uttarakhand. I am Computer Science Engineering
          Graduate with minors in Cyber Security. I am passionate about writing clean, efficient and
          optimized code. I wrote my First Program in C++ in 2012.
        </p>
        <div className="about_left_socialMedia">
          <img
            src={github.src}
            alt=""
            onClick={() => window.open("https://github.com/iamhiman", "_blank")}
          />
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/himankash/", "_blank")}
          />
          <img
            src={instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/himan_kash/", "_blank")}
          />
          <img
            src={gmail.src}
            alt=""
            onClick={() => window.open("mailto:himanshu27kashyap@gmail.com", "_blank")}
          />
        </div>
        <div
          className="about_left_starme"
          onClick={() => window.open("https://github.com/iamhiman/personal-webpage-v2", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
