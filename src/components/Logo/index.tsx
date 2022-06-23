import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

import SVG from "react-inlinesvg";

import styles from "style.module.scss";

export function Logo() {
  return (
    <Link to="/home">
      <SVG src="/static/assets/logo.svg"/>
    </Link>
  )
}