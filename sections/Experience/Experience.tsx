import { info } from "@/db/info";
import { ExperienceInfo } from "@/components";
import { HelperTitle } from "@/helpers";
import styles from "@/styles/Global.module.css";

export const Experience = () => {
  const { title } = info.experience;
  return (
    <section id="experience" className={styles.sections}>
      <HelperTitle title={title}></HelperTitle>
      <ExperienceInfo />
    </section>
  );
};
