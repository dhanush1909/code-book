import React from "react";
import classes from "./header.module.css";
import Logo from "../../UI/logo/logo";

export default function header(props) {
  const isMenuActive = props.showSideBar ? classes.Active : "";
  const menuClasses = [classes.Hamburger, isMenuActive];
  return (
    <div className={classes.Header}>
      <img
        className={menuClasses.join(" ")}
        src="https://img.icons8.com/ios-glyphs/120/000000/menu.png"
        alt="menu"
        onClick={props.toggleMenu}
      />
      <Logo />
    </div>
  );
}
