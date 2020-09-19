import React from "react";
import classes from "./card.module.css";

export default function card(props) {
  const color = props.color === "red" ? classes.Red : classes.Yellow;
  let cardClass = [classes.Card, color];
  return <div className={cardClass.join(" ")}>{props.title}</div>;
}
