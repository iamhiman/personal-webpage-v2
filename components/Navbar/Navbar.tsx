"use client";

import { useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import { SECTION, THEME } from "@/utils/constants/constants";
import { INavbarProps } from "@/utils/typings/typings";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

const Navbar: NextPage<INavbarProps> = ({
  onNavItemClick = () => {},
  switchTheme = () => {},
  theme,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <nav className={cx("navbar")}>
        <div className={cx("menu")}>
          <input
            className={cx("checked")}
            type="checkbox"
            checked={showSidebar}
            onChange={() => setShowSidebar(!showSidebar)}
          />
          <div className={cx("line", showSidebar ? "line-1" : "line1")} />
          <div className={cx("line", showSidebar ? "line-2" : "line2")} />
          <div className={cx("line", showSidebar ? "line-3" : "line3")} />
        </div>
        <p className={cx("navbar-name")}>
          <span>Himanshu</span>
          <Image
            src={theme === THEME.LIGHT ? "/assets/sun.webp" : "/assets/moon.webp"}
            alt="sun-moon-image"
            width={40}
            height={40}
            priority
            onClick={switchTheme}
          />
        </p>
        <div className={cx("navbar-list")}>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.ABOUT)}>
            About
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.JOBS)}>
            Work
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.PROJECTS)}>
            Projects
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.SKILLS)}>
            Skills
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.CONTACT)}>
            Contact
          </p>
        </div>
      </nav>
      <div className={cx("sidebar", showSidebar && "active")}>
        <p className={cx("sidebar-item")}>About</p>
        <p className={cx("sidebar-item")}>Work</p>
        <p className={cx("sidebar-item")}>Projects</p>
        <p className={cx("sidebar-item")}>Skills</p>
        <p className={cx("sidebar-item")}>Contact</p>
      </div>
    </>
  );
};

export default Navbar;
