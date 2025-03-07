"use client";

import type { NextPage } from "next";
import classNames from "classnames/bind";
import Moon from "../../assets/moon.webp";
import Sun from "../../assets/sun.webp";
import { SECTION, THEME } from "@/utils/constants/constants";
import { INavbarProps } from "@/utils/typings/typings";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

const Navbar: NextPage<INavbarProps> = ({ onNavItemClick = () => {}, switchTheme = () => {}, theme }) => {
  return (
    <nav className={cx("navbar")}>
      {/* <div className="menu">
        <input className="check" type="checkbox" onChange={() => setShowSidebar(!showSidebar)} checked={showSidebar} />
        <div className={showSidebar ? "line line-1" : "line line1"}></div>
        <div className={showSidebar ? "line line-2" : "line line2"}></div>
        <div className={showSidebar ? "line line-3" : "line line3"}></div>
      </div> */}

      <p className={cx("navbar-name")}>
        <span>Himanshu</span>
        <img src={theme === THEME.LIGHT ? Sun.src : Moon.src} alt="" onClick={switchTheme} />
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
  );
};

export default Navbar;

{
  /* <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.ABOUT)}>
          About
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.JOBS)}>
          Work
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.PROJECTS)}>
          Projects
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.SKILLS)}>
          Skills
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.CONTACT)}>
          Contact
        </p>
      </div> */
}
