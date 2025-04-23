import React from "react";
import styles from "./ProjectCard.module.css";
import projectImg from "../../assets/projects/project.png";  // Import image from the src folder

export const ProjectCard = ({
  project: { title, imageSrc, description, skills },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={projectImg} // Use the imported image path here
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
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
