import React from "react";
import classNames from "classnames/bind";
import styles from "./CircularLoader.module.scss";

const cx = classNames.bind(styles);

const CircularLoader = () => {
  return <div className={cx("circular-loader")} />;
};

export default CircularLoader;
