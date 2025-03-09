"use client";

import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { Navbar } from "@/components";
import {
  AboutSection,
  ContactSection,
  FooterSection,
  JobsSection,
  ProjectsSection,
  SkillsSection,
} from "@/containers";
import { SECTION } from "@/utils/constants/constants";
import { IHomePageLayoutProps } from "@/utils/typings/typings";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { useScroll } from "@/utils/hooks/useScroll";
import { useTheme } from "@/utils/hooks/useTheme";
import styles from "./HomePageLayout.module.scss";

const cx = classNames.bind(styles);

const HomePageLayout: NextPage<IHomePageLayoutProps> = ({ cmsApiResponse, error, loading }) => {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const { isScrollButtonVisible } = useScroll();
  const { theme, switchTheme } = useTheme();

  const { jobs, skills, projects } = cmsApiResponse;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavItemClick = (item: string) => {
    window.scrollTo({
      top: SECTION.ABOUT ? 0 : sectionsRef.current[item.toLowerCase()]!.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return (
    <div data-theme={theme} className={cx("home-page-layout")}>
      <Navbar theme={theme} onNavItemClick={handleNavItemClick} switchTheme={switchTheme} />
      <main>
        <section className={cx("about-section")}>
          <AboutSection />
        </section>
        <section
          className={cx("job-section")}
          ref={el => {
            sectionsRef.current.jobs = el;
          }}
        >
          <JobsSection jobs={jobs} />
        </section>
        <section
          className={cx("projects-section")}
          ref={el => {
            sectionsRef.current.projects = el;
          }}
        >
          <ProjectsSection projects={projects} />
        </section>
        <section
          className={cx("skills-section")}
          ref={el => {
            sectionsRef.current.skills = el;
          }}
        >
          <SkillsSection skills={skills} />
        </section>
        <section
          className={cx("contact-section")}
          ref={el => {
            sectionsRef.current.contact = el;
          }}
        >
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
