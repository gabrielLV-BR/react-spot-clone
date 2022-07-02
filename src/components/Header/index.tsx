import React from "react";
import { ReactDOM } from "react";

import styles from "./style.module.scss";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { Profile } from "../Profile";

export function Header() {
  return <header className={styles.header}>
    <span className={styles.left}>
      <Logo/>
    </span>
    <span className={styles.right}>
      <ul>
        <li><Link to="/home">Premium</Link></li>
        <li><Link to="/home">Suporte</Link></li>
        <li><Link to="/home">Baixar</Link></li>
        <li className={styles.profile}><Profile/></li>
        <li className={styles.logo}><Logo/></li>
      </ul>
    </span>
    <button className={styles.toggleMenu}>Menu</button>
  </header>
}