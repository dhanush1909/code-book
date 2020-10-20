import React from "react";
import classes from "./sideBarMobile.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/backdrop/backdrop";

function sideBarMobile(props) {
  const pos = props.showMobileSideBar ? "0%" : "-100%";
  const style = { transform: "translate(" + pos + ")" };
  return (
    <>
      {props.showMobileSideBar ? (
        <div className={classes.Backdrop}>
          <Backdrop hideSideBar={props.hideSideBar} />
        </div>
      ) : null}

      <div className={classes.Sidebar} style={style}>
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
          <NavLink
            className={classes.NavLink + " navlink"}
            to="/problems/Maximum-subarray"
          >
            <li>Maximum subarray</li>
          </NavLink>
          <NavLink
            className={classes.NavLink + " navlink"}
            to="/problems/Single-number"
          >
            <li>Single number</li>
          </NavLink>
          <NavLink
            className={classes.NavLink + " navlink"}
            to="/problems/Find-the-duplicate-number"
          >
            <li>Find the duplicate number</li>
          </NavLink>
          <li>Problem 4</li>
          <li>Problem 5</li>
          <li>Problem 6</li>
          <li>Problem 7</li>
          <li>Problem 8</li>
          <li>Problem 9</li>
          <li>Problem 10</li>
        </ul>
      </div>
    </>
  );
}

export default sideBarMobile;
