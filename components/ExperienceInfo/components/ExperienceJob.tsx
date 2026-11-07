"use client";
import { useGlobal } from "@/store";
import styles from "../ExperienceInfo.module.css";

interface ExperienceInfoProps {
  charge: string[];
  company: string;
  time: string[];
  description: string[];
  stack: string[];
  type: string;
}

export const ExperienceJob = ({
  charge,
  company,
  time,
  description,
  stack,
}: ExperienceInfoProps) => {
  const { language } = useGlobal();
  return (
    <li className={`${styles.experienceJob} reveal`}>
      <div className={styles.jobMeta}>
        <span className={styles.jobTime}>{time[language]}</span>
        <h3>{company}</h3>
        <h4>{charge[language]}</h4>
      </div>
      <div className={styles.jobBody}>
        <p className={styles.experienceJobDescription}>{description[language]}</p>
        {stack.length > 0 && (
          <ul className={styles.jobStack} aria-label="Stack">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
