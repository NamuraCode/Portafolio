import { Projects } from "@/components";
import mainStyles from "@/styles/MainStyles.module.css";

export const ProjectsMain = () => {
  return (
    <section id="projects" className={`${mainStyles["sections"]} ${mainStyles['others']}`}>
      <Projects />
    </section>
  );
};
