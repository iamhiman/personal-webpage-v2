"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className={cx("sidebar")}>
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

      <div className={cx("sidebar-list", showSidebar && "active")}>
        <p className={cx("sidebar-list-item")}>About</p>
        <p className={cx("sidebar-list-item")}>Work</p>
        <p className={cx("sidebar-list-item")}>Projects</p>
        <p className={cx("sidebar-list-item")}>Skills</p>
        <p className={cx("sidebar-list-item")}>Contact</p>
      </div>
    </div>
  );
};

export default Sidebar;
