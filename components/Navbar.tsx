import type { NextPage } from "next";
import { useState } from "react";

export const Navbar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line1"}></div>
          <div className={showSidebar ? "line line-2" : "line2"}></div>
          <div className={showSidebar ? "line line-3" : "line3"}></div>
        </div>

        <p className="navbar_name">Himanshu</p>
        <div className="navbar_list">
          <p className="navbar_list_item">About</p>
          <p className="navbar_list_item">Work</p>
          <p className="navbar_list_item">Projects</p>
          <p className="navbar_list_item">Skills</p>
          <p className="navbar_list_item">Contact</p>
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item">About</p>
        <p className="sidebar_item">Work</p>
        <p className="sidebar_item">Projects</p>
        <p className="sidebar_item">Skills</p>
        <p className="sidebar_item">Contact</p>
      </div>
    </>
  );
};
