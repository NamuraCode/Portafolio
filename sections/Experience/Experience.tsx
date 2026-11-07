import { info } from "@/db/info";
import { ExperienceInfo } from "@/components";
import { HelperTitle } from "@/helpers";
import styles from "@/styles/Global.module.css";

export const Experience = () => {
  const { title, devSubtitle, subtitle, jobs } = info.experience;
  return (
    <section id="experience" className={styles.sections}>
      <HelperTitle title={title} index="02" />
      <ExperienceInfo jobs={jobs()} devSubtitle={devSubtitle} subtitle={subtitle} />
    </section>
  );
};
