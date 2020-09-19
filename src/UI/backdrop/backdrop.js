import React from "react";
import classes from "./backdrop.module.css";

export default function backdrop(props) {
  return <div className={classes.Backdrop} onClick={props.hideSideBar}></div>;
}
