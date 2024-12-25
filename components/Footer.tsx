import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textOne">No &copy; copyright issues.</p>
        <p className="footer_copyright_textTwo">Feel free to copy.</p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
          <img src={Github.src} alt="" onClick={() => window.open("https://github.com/iamhiman", "_blank")} />
          <img
            src={Linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/himankash/", "_blank")}
          />
          <img
            src={Instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/himan_kash/", "_blank")}
          />
          <img src={Gmail.src} alt="" onClick={() => window.open("mailto:himanshu27kashyap@gmail.com", "_blank")} />
        </div>
      </div>
    </footer>
  );
};
