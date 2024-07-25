import { info } from "@/db/info";
import { ProjectToggle, ProjectCard } from "./components"
import styles from "./ProjectInfo.module.css"

export const ProjectsInfo = () => {
    const projects = info.projects.projects();
    
  return (
    // <div className={styles.projectInfo}>
    <div>
      <ProjectToggle />
      <div className={styles.projectInfoCards}>
        {projects.map((project) => (
          <ProjectCard key={project.image} image={project.image} text={project.title} />
        ))}
      </div>
    </div>
  )
}
