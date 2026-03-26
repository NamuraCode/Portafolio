import { info, infoImagesProject } from "@/db/info";
import { ProjectsInfo } from "@/components";
import { HelperTitle } from "@/helpers";
import styles from "@/styles/Global.module.css";

export const Projects = () => {
  const { title, toggle } = info.projects;
  return (
    <section id="projects" className={styles.sections}>
      <HelperTitle title={title}></HelperTitle>
      <ProjectsInfo projects={infoImagesProject} toggle={toggle} />
    </section>
  );
};
