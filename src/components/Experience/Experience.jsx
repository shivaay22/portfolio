import React from "react";
import styles from "./Experience.module.css";
import htmlImage from "../../assets/skills/html.png";
import cssImage from "../../assets/skills/css.png";
import reactImage from "../../assets/skills/react.png";
import nodeImage from "../../assets/skills/node.png";
import mongoImage from "../../assets/skills/mongodb.png";
import graphImage from "../../assets/skills/graphql.png";

import skills from "../../data/skills.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            let imageSrc;

            // Map each skill to the appropriate image
            switch (skill.title) {
              case "HTML":
                imageSrc = htmlImage;
                break;
              case "CSS":
                imageSrc = cssImage;
                break;
              case "React":
                imageSrc = reactImage;
                break;
              case "Node":
                imageSrc = nodeImage;
                break;
              case "MongoDB":
                  imageSrc = mongoImage;
                  break;
              case "GraphQL":
                  imageSrc = graphImage;
                  break;
              default:
                imageSrc = null;
            }

            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {/* Directly use the imported image */}
                  {imageSrc && <img src={imageSrc} alt={skill.title} />}
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
