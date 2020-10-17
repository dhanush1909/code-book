import React from "react";
import classes from "./codeBlock.module.css";
import {
  LiveProvider,
  LiveEditor
} from 'react-live'

export default function codeBlock(props) {
  return (
    <LiveProvider disabled language="java" code={props.children}>
      <LiveEditor className={classes.CodeBlock} />
    </LiveProvider>);
}
