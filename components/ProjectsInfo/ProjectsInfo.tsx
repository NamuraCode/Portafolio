"use client";
import type { ImageProjectProps } from "@/helpers/HelperSlider/HelperSlider";
import { ProjectToggle } from "./components/ProjectToggle";
import styles from "./ProjectInfo.module.css";
import { useGlobal } from "@/store";
import { HelperSlider } from "@/helpers";

interface ProjectsInfoProps {
  projects: ImageProjectProps[];
  toggle: {
    dev: string[];
    art: string[];
  };
}

export const ProjectsInfo = ({ projects, toggle }: ProjectsInfoProps) => {
  const { projectType } = useGlobal();
  const projectsDev = projects.filter((p) => p.type === "dev");
  const projectsArt = projects.filter((p) => p.type === "art");

  return (
    <div className={styles.projectInfo}>
      <ProjectToggle toggle={toggle} />
      <div className={`${styles.projectInfoCards} ${projectType === "art" && styles.hiddenProjects}`}>
        {projectsDev.map((project, index) => (
          <HelperSlider
            key={`projectDEVNumber${index}`}
            imagePropsProject={project}
            isProject={true}
          />
        ))}
      </div>
      <div className={`${styles.projectInfoCards} ${projectType === "dev" && styles.hiddenProjects}`}>
        {projectsArt.map((project, index) => (
          <HelperSlider
            key={`projectARTNumber${index}`}
            imagePropsProject={project}
            isProject={true}
          />
        ))}
      </div>
    </div>
  );
};
