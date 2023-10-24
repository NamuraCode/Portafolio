import Image from "next/image";

import mainStyles from "@/styles/MainStyles.module.css";
import styles from "@/styles/ProjectCards.module.css";

export const ProjectCard = () => {
  return (
    <div className={styles["cardProjects"]}>
      <div className={styles["cardImage"]}>
        <Image
          className={styles["cardProjectsImage"]}
          src={"/images/makata.jpeg"}
          width={100}
          height={100}
          alt="projectImage"
        />
      </div>
      <div className={styles["cardProjectsDescription"]}>
        <p className={styles["descriptionName"]}>Name Project</p>
        <p className={styles["descriptionText"]}>Description </p>
        <p className={styles["descriptionCompany"]}>
          <span>Company</span>
          <span>Year</span>
        </p>
        <hr />
        <p className={styles["descriptionCreator"]}>Creation of Makata dev's</p>
        <button className={mainStyles["btn"]}>Go to project</button>
      </div>
    </div>
  );
};
