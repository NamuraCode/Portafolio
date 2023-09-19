import { ExpListProps } from "@/interfaces";

import styles from "@/styles/Experience.module.css";
import { ExperienceBar } from "./ExperienceBar";
import { ExperienceCard } from "./ExperienceCard";

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
              <p className={styles["experience-item"]}>
                {experience.date[indexLanguage]}
              </p>
              <div className={styles["experience-item-info"]}>
                <ExperienceCard
                  key={index}
                  company={experience.company}
                  description={experience.description[indexLanguage]}
                  img={`${experience.imageUrl}`}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <ExperienceBar />
    </div>
  );
};
