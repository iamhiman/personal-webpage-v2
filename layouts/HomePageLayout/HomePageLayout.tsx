"use client";

import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { Navbar, Sidebar } from "@/components";
import {
  AboutSection,
  ContactSection,
  FooterSection,
  JobsSection,
  ProjectsSection,
  SkillsSection,
} from "@/containers";
import { SECTION, THEME } from "@/utils/constants/constants";
import { IHomePageLayoutProps } from "@/utils/typings/typings";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { useScroll } from "@/utils/hooks/useScroll";
import styles from "./HomePageLayout.module.scss";

const cx = classNames.bind(styles);

const HomePageLayout: NextPage<IHomePageLayoutProps> = ({ cmsApiResponse, error, loading }) => {
  const [theme, setTheme] = useState<string>(THEME.LIGHT);
  const jobsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const { isScrollButtonVisible } = useScroll();

  const { jobs, skills, projects } = cmsApiResponse;

  useEffect(() => {
    const theme = localStorage.getItem("themeValue");
    setTheme(theme === THEME.LIGHT || !theme ? THEME.LIGHT : THEME.DARK);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case SECTION.ABOUT:
        scrollObject = { top: 0, behavior: "smooth" };
        break;

      case SECTION.JOBS:
        scrollObject = { top: jobsRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      case SECTION.PROJECTS:
        scrollObject = { top: projectsRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      case SECTION.SKILLS:
        scrollObject = { top: skillsRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      case SECTION.CONTACT:
        scrollObject = { top: contactRef.current?.offsetTop! - 70, behavior: "smooth" };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <div data-theme={theme} className={cx("home-page-layout")}>
      <Navbar theme={theme} onNavItemClick={handleNavItemClick} switchTheme={switchTheme} />
      <Sidebar />
      <main>
        <section className={cx("about-section")}>
          <AboutSection />
        </section>
        <section className={cx("job-section")} ref={jobsRef}>
          <JobsSection jobs={jobs} />
        </section>
        <section className={cx("projects-section")} ref={projectsRef}>
          <ProjectsSection projects={projects} />
        </section>
        <section className={cx("skills-section")} ref={skillsRef}>
          <SkillsSection skills={skills} />
        </section>
        <section className={cx("contact-section")} ref={contactRef}>
          <ContactSection />
        </section>
      </main>
      <FooterSection />
      {isScrollButtonVisible && (
        <Image
          src="/assets/scrollup.webp"
          alt="scroll-up-button"
          className={cx("scroll-up")}
          width={40}
          height={40}
          priority
          onClick={scrollToTop}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default HomePageLayout;
