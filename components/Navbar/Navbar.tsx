"use client";

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
  return (
    <nav className={cx("navbar")}>
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
  );
};

export default Navbar;
