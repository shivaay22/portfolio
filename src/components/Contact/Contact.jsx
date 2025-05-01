import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import emailImg from "../../assets/contact/emailIcon.png";
import gitImg from "../../assets/contact/githubIcon.png";
import linkedImg from "../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailImg} alt="Email icon" />
          <a href="mailto:shivambhardwaj2022@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={gitImg}
            alt="LinkedIn icon"
          />
          <a href="https://github.com/shivaay22">github.com/myGitHUb</a>
        </li>
        <li className={styles.link}>
          <img src={linkedImg} alt="Github icon" />
          <a href="www.linkedin.com/in/shivam22dubey//">linked.com/myLinkedin</a>
        </li>
      </ul>
    </footer>
  );
};
