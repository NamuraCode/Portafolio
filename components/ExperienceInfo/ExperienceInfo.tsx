"use client";
import type { JobProps } from "@/db/info";
import styles from "./ExperienceInfo.module.css";
import { useGlobal } from "@/store";
import { ExperienceJob } from "./components/ExperienceJob";

interface ExperienceInfoProps {
  jobs: JobProps[];
  subtitle: string[];
}

export const ExperienceInfo = ({ jobs, subtitle }: ExperienceInfoProps) => {
  const { language } = useGlobal();
  return (
    <div className={styles.expContent}>
      <div className={styles.expContentContainer}>
        {jobs.map((job, index) =>
          job.type === "dev" && <ExperienceJob key={index} {...job} />
        )}
      </div>
      <p className={styles.subtitle}>{subtitle[language]}</p>
      <div className={styles.expContentContainer}>
        {jobs.map((job, index) =>
          job.type === "art" && <ExperienceJob key={index} {...job} />
        )}
      </div>
    </div>
  );
};
