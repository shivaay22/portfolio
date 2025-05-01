import React from "react";

import styles from "./Hero.module.css";
import heroImg from "../../assets/hero/newPort.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shivam</h1>
        <p className={styles.description}>
        Passionate Full Stack Developer (MERN) with strong skills in Java, DSA, and building scalable, high-performance web apps with clean, maintainable code.
        </p>
      </div>
      <img
        src={heroImg}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
