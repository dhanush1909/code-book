import React from "react";
import classes from "./nav.module.css";

export default function nav() {
  return (
    <ul className={classes.Nav}>
      <li className={classes.Active}>Home</li>
      <li>About Us</li>
    </ul>
  );
}
