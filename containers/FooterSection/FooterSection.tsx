import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./FooterSection.module.scss";

const cx = classNames.bind(styles);

const FooterSection: NextPage = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer_copyright")}>
        <p className={cx("footer-copyright-main-text")}>No &copy; copyright issues.</p>
        <p className={cx("footer-copyright-sub-text")}>Feel free to copy.</p>
      </div>
      <div className={cx("footer-socialmedia")}>
        <p>Connect with me !</p>
        <div className={cx("footer-socialmedia-links")}>
          <Image
            src="/assets/github.webp"
            alt="Github Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://github.com/iamhiman", "_blank")}
          />
          <Image
            src="/assets/linkedin.webp"
            alt="Linkedin Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://www.linkedin.com/in/himankash/", "_blank")}
          />
          <Image
            src="/assets/instagram.webp"
            alt=" Instagram Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://www.instagram.com/himan_kash/", "_blank")}
          />
          <Image
            src="/assets/gmail.webp"
            alt="Gmail Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("mailto:himanshu27kashyap@gmail.com", "_blank")}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
