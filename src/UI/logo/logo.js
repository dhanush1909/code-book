import React from "react";
import classes from "./logo.module.css";
import logoImg from "../../assets/logo.png";

export default function logo() {
  return (
    <div className={classes.Logo}>
      <img alt="Code Book" src={logoImg} className={classes.LogoImg} />
      Code Book
    </div>
  );
}
