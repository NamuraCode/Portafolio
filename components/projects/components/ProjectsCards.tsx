import { ProjectCard } from "./ProjectCard";

import styles from "@/styles/ProjectCards.module.css"

export const ProjectsCards = () => {
  return (
    <div className={styles['cards']}>
      <ProjectCard />
    </div>
  );
};
