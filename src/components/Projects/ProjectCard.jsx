import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={`/${imageSrc}`} 
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* GitHub Link with full URL */}
      <p className={styles.source}>
        GitHub Link:{" "}
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {source}
        </a>
      </p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
