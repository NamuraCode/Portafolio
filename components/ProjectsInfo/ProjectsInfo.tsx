"use client";
import { infoImagesProject } from "@/db/info";
import { ProjectToggle } from "./components/ProjectToggle";
import styles from "./ProjectInfo.module.css";
import { useGlobal } from "@/store";
import { HelperSlider } from "@/helpers";

export const ProjectsInfo = () => {
  const projects = infoImagesProject;
  const { projectType } = useGlobal();

  return (
    // <div className={styles.projectInfo}>
    <div>
      <ProjectToggle />
      <div className={styles.projectInfoCards}>
        {projects.map((project, index) => {
          return (
            projectType === project.type && (
              <HelperSlider
                key={`project${project.type.toUpperCase()}Number${index}`}
                imagePropsProject={project}
                isProject={true}
              />
            )
          );
        })}
      </div>
    </div>
  );
};
