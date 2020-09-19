import React from "react";
import classes from "./codeBlock.module.css";

export default function codeBlock(props) {
  return <pre className={classes.CodeBlock}>{props.children}</pre>;
}
