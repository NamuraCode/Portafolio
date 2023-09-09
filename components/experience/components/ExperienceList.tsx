import { Marquee } from "@/components/marquee/Marquee";
import { ExpListProps } from "@/interfaces";
import styles from "@/styles/Experience.module.css";

export const ExperienceList = ({ experiences, indexLanguage }: ExpListProps ) => {
  return (
    <div className={styles["experience-navbar-main"]}>
      <ul className={styles["experience-navbar-items"]}>
        {experiences.map((experience, index) => {
          return (
            <li className={styles["experience-navbar-item"]} key={index}>
              <a
                key={index}
                className={styles["experience-item"]}
                href={`#${index}`}
              >
                {experience.date[indexLanguage]}
              </a>
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
      {/* <Marquee/> */}
    </div>
  );
};
