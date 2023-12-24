import { getInfo } from "@/utils";
import { useAppSelector } from "@/store";

import { Experience } from "@/components";

import styles from "@/styles/ExperienceMain.module.css";
import mainStyles from "@/styles/MainStyles.module.css";

export const ExperienceMain = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { experience } = getInfo();
  return (
    <section className={`${styles["experience-main"]} ${mainStyles['others']}`}>
      <h2 className={`${styles["experience-title"]} ${mainStyles.titles}`}>{experience[indexLanguage]}</h2>
      <Experience />
    </section>
  );
};
