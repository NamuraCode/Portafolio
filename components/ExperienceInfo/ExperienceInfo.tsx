"use client";
import { info } from "@/db/info";
import styles from "./ExperienceInfo.module.css";
import { useGlobal } from "@/store";
import { ExperienceJob } from "./components/ExperienceJob";

export const ExperienceInfo = () => {
  const { language } = useGlobal();
  const { experience } = info;
  const { jobs } = experience;
  return (
    <div className={styles.expContent}>
      <div className={styles.expContentContainer}>
        {jobs(language).map((job, index) =>
          job.type === "dev" && <ExperienceJob key={index} {...job} />
        )}
      </div>
      <p className={styles.subtitle}>{experience.subtitle[language]}</p>
      <div className={styles.expContentContainer}>
        {jobs(language).map((job, index) =>
          job.type === "art" && <ExperienceJob key={index} {...job} />
        )}
      </div>
    </div>
  );
};
