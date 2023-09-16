import { getInfo } from "@/utils";
import { useAppSelector } from "@/store";

import { ExperienceList, ExperienceSelector } from "./components";

import styles from "@/styles/Experience.module.css";

export const Experience = () => {
  const { selectExp } = getInfo();
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { job } = useAppSelector((state) => state.experience);

  return (
    <article className={styles["experience-info"]}>
      <div className={styles["experience-navbar"]}>
        <h3 className={styles["experience-navbar-title"]}>
          {selectExp[indexLanguage]}
        </h3>
        <ExperienceSelector />
      </div>
      <ExperienceList experiences={job} indexLanguage={indexLanguage} />
    </article>
  );
};
