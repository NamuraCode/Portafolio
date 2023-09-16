import { ExpListProps } from "@/interfaces";

import styles from "@/styles/Experience.module.css";
import { ExperienceBar } from "./ExperienceBar";

export const ExperienceList = ({
  experiences,
  indexLanguage,
}: ExpListProps) => {
  return (
    <div className={styles["experience-navbar-main"]}>
      <ul className={styles["experience-navbar-items"]}>
        {experiences.map((experience, index) => {
          return (
            <li className={styles["experience-navbar-item"]} key={index}>
              <p
                className={styles["experience-item"]}
              >
                {experience.date[indexLanguage]}
              </p>
              <div className={styles["experience-item-info"]}>
                <p>
                  <span>{experience.company}</span>
                  <br />
                  {experience.description[indexLanguage]}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <ExperienceBar />
    </div>
  );
};
