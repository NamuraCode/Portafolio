'use client';

import { Experience } from "@/components";
import { useAppSelector } from "@/store/hook/useRedux";
import { getInfo } from "@/utils";
import styles from "@/styles/ExperienceMain.module.css";

export const ExperienceMain = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { experience } = getInfo();
  return (
    <section className={styles["experience-main"]}>
      <h2 className={styles["experience-title"]}>{experience[indexLanguage]}</h2>
      <Experience />
    </section>
  );
};
