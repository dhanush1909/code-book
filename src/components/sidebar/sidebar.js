import React from "react";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function sidebar() {
  return (
    <div className={classes.Sidebar}>
      <ul>
        <NavLink
          className={classes.NavLink + " navlink"}
          to="/problems/Running-sum-of-1d-array"
        >
          <li>Running Sum of 1d Array</li>
        </NavLink>
        <NavLink
          className={classes.NavLink + " navlink"}
          to="/problems/Number-of-Good-Pairs"
        >
          <li>Number of Good Pairs</li>
        </NavLink>
        <li>Problem 3</li>
        <li>Problem 4</li>
        <li>Problem 5</li>
        <li>Problem 6</li>
        <li>Problem 7</li>
        <li>Problem 8</li>
        <li>Problem 9</li>
        <li>Problem 10</li>
      </ul>
    </div>
  );
}
