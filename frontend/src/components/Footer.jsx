import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Footer.module.css";

import gitHubImg from "../assets/github.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-section"]}>
          <Link to="/">About</Link>
        </div>
        <div className={styles["footer-section"]}>
          <Link to="/">Questions</Link>
        </div>
        <div className={styles["footer-section"]}>
          <Link to="/">Contact</Link>
        </div>
        <div className={styles["footer-section"]}>
          <p className={styles.copyright}>© GalaxyGetaways 2023</p>
          <a href="https://github.com/WildCodeSchool/2022-11-JS-RemoteFR-Geekrew-P2-Orbital-Code">
            <img
              src={gitHubImg}
              alt="github"
              className={styles["github-link"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
