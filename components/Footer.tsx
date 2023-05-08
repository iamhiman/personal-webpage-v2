import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Gmail from "../assets/gmail.webp";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textThree">
          <span onClick={() => window.open("https://github.com/iamhiman/personal-webpage-v2", "_blank")}> Original website project here</span>
        </p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
          <img
            src={Github.src}
            alt=""
            onClick={() => window.open("https://github.com/liqlos", "_blank")}
          />
          <img
            src={Linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/abukhalov/", "_blank")}
          />
          <img
            src={Gmail.src}
            alt=""
            onClick={() => window.open("mailto:alex@bukhalov.com", "_blank")}
          />
        </div>
      </div>
    </footer>
  );
};
