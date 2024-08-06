"use client";
import { useGlobal } from "@/store";
import styles from "../ExperienceInfo.module.css";

interface ExperienceInfoProps {
  charge: string[];
  company: string;
  time: string[];
  description: string[];
  type: string;
}

export const ExperienceJob = ({
  charge,
  company,
  time,
  description,
  type,
}: ExperienceInfoProps) => {
  const { language }  = useGlobal();
  return (
    <div className={styles.experienceJob}>
      <div>
        <h3>{company}</h3>
        <h4>{charge[language]}</h4>
        <p>{time[language]}</p>
      </div>
      <p className={styles.experienceJobDescription}>{description[language]}</p>
    </div>
  );
};
