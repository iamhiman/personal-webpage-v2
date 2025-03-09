"use client";

import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./AboutSection.module.scss";

const cx = classNames.bind(styles);

const AboutSection: NextPage = () => {
  return (
    <div className={cx("about")}>
      <div className={cx("about-left")}>
        <h1 className={cx("about-left-head")}>Hi, I&apos;m Himanshu Kashyap</h1>
        <p className={cx("about-left-text")}>
          I am a Software Engineer (Fullstack) from Dehradun, Uttarakhand - India. I am experienced
          in writing scalable code & building fault-tolerant systems from scratch. I have done my
          graduation in Computer Science Engineering with minors in Cyber Security. I am passionate
          about writing clean, efficient and optimized code. I wrote my First Program in C++ in
          2012.
        </p>
        <div className={cx("about-left-socialMedia")}>
          <Image
            src="/assets/github.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://github.com/iamhiman", "_blank")}
          />
          <Image
            src="/assets/linkedin.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://www.linkedin.com/in/himankash/", "_blank")}
          />
          <Image
            src="/assets/instagram.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://www.instagram.com/himan_kash/", "_blank")}
          />
          <Image
            src="/assets/gmail.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("mailto:himanshu27kashyap@gmail.com", "_blank")}
          />
        </div>
        <div
          className={cx("about-left-starme")}
          onClick={() => window.open("https://github.com/iamhiman/personal-webpage-v2", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className={cx("about-right")}>
        <div className={cx("about-right-profilePic")} />
      </div>
    </div>
  );
};

export default AboutSection;
