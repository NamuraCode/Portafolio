"use client";
import { infoImages } from "@/db/info";
import { ProjectToggle, ProjectCard } from "./components";
import styles from "./ProjectInfo.module.css";
import { useGlobal } from "@/store";

export const ProjectsInfo = () => {
  const projects = infoImages.imagesProject;
  const { projectType } = useGlobal();

  return (
    // <div className={styles.projectInfo}>
    <div>
      <ProjectToggle />
      <div className={styles.projectInfoCards}>
        {projects.map((project, index) => {
          return (
            projectType === project.type && (
              <ProjectCard
                key={`projectImg${index}`}
                images={project.image}
                text={project.title}
                url={project.url}
              />
            )
          );
        })}
      </div>
    </div>
  );
};
