import Image from "next/image";

import styles from "@/styles/ProjectCard.module.css"

export const ProjectCard = () => {
  return (
    <div className={styles['cardProjects']}>
      <Image src={""} width={100} height={100} alt="projectImage"></Image>
      <h3>Name Project</h3>
    </div>
  );
};
