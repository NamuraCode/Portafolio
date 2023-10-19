import Image from "next/image";

import mainStyles from "@/styles/MainStyles.module.css";
import styles from "@/styles/ProjectCards.module.css";

export const ProjectCard = () => {
  return (
    <div className={styles["cardProjects"]}>
      <Image
        className={styles["cardProjectsImage"]}
        src={"/images/makata.jpeg"}
        width={100}
        height={100}
        alt="projectImage"
      ></Image>
      <p>Name Project</p>
      <p>Description </p>
      <div>
        <p>Company</p>
        <p>Actualization</p>
      </div>
      <br/>
      <p>Creation of Makata dev's</p>
    </div>
  );
};
