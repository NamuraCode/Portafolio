"use client";
import { infoImagesProject } from "@/db/info";
import { ProjectToggle } from "./components/ProjectToggle";
import styles from "./ProjectInfo.module.css";
import { useGlobal } from "@/store";
import { HelperSlider } from "@/helpers";

const projects = infoImagesProject;
const projectsDev = projects.filter((project) => (project.type == "dev"));
const projectsArt = projects.filter((project) => (project.type == "art"));

export const ProjectsInfo = () => {
  const { projectType } = useGlobal();
  return (
    <div className={styles.projectInfo}>
      <ProjectToggle />
      <div className={`${styles.projectInfoCards} ${projectType == "art" && styles.hiddenProjects}`}>
        {projectsDev.map((project, index) => {
          return (
            <HelperSlider
              key={`project${project.type.toUpperCase()}Number${index}`}
              imagePropsProject={project}
              isProject={true}
            />
          );
        })}
      </div>
      <div className={`${styles.projectInfoCards} ${projectType == "dev" && styles.hiddenProjects}`}>
        {projectsArt.map((project, index) => {
          return (
            <HelperSlider
              key={`project${project.type.toUpperCase()}Number${index}`}
              imagePropsProject={project}
              isProject={true}
            />
          );
        })}
      </div>
    </div>
  );
};
