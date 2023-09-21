import { getInfo } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/store";

import { ExperienceList, ExperienceSelector } from "./components";

import styles from "@/styles/Experience.module.css";
import { useState } from "react";

export const Experience = () => {
  const [ expMouse, setExpMouse ] = useState(1)
  const { selectExp } = getInfo();
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { job } = useAppSelector((state) => state.experience);
  const dispatch = useAppDispatch();


  return (
    <article className={styles["experience-info"]} onMouseMove={(e)=>{}}>
      <div className={styles["experience-navbar"]}>
        <h3 className={styles["experience-navbar-title"]}>
          {selectExp[indexLanguage]}
        </h3>
        <ExperienceSelector />
      </div>
      <ExperienceList experiences={job} indexLanguage={indexLanguage} />
    </article>
  );
};
