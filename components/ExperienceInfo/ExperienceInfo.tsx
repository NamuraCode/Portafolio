"use client";
import type { JobProps } from "@/db/info";
import styles from "./ExperienceInfo.module.css";
import { useGlobal } from "@/store";
import { ExperienceJob } from "./components/ExperienceJob";

interface ExperienceInfoProps {
  jobs: JobProps[];
  devSubtitle: string[];
  subtitle: string[];
}

export const ExperienceInfo = ({
  jobs,
  devSubtitle,
  subtitle,
}: ExperienceInfoProps) => {
  const { language } = useGlobal();
  const groups = [
    { label: devSubtitle, type: "dev" },
    { label: subtitle, type: "art" },
  ];
  return (
    <div className={styles.expContent}>
      {groups.map((group) => (
        <div key={group.type} className={styles.expGroup}>
          <p className={`${styles.subtitle} reveal`}>{group.label[language]}</p>
          <ol className={styles.expContentContainer}>
            {jobs
              .filter((job) => job.type === group.type)
              .map((job) => (
                <ExperienceJob key={`${job.company}-${job.time[1]}`} {...job} />
              ))}
          </ol>
        </div>
      ))}
    </div>
  );
};
