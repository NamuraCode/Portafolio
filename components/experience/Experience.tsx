"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook/useRedux";
import { setExperience } from "@/store/slice/experienceSlice/experienceSlice";
import { getInfo, useSetWidthExp } from "@/utils";
import styles from "@/styles/Experience.module.css";
import { ExperienceList } from "./components";

export const Experience = () => {
  const devRef = useRef<HTMLAnchorElement>(null);
  const modelRef = useRef<HTMLAnchorElement>(null);
  const contentExperience = useRef<HTMLDivElement>(null);

  const { selectExp, modeling_3d, dev,  experiences_jobs } = getInfo();

  const { indexLanguage } = useAppSelector((state) => state.language);
  const { nameExperience, job } = useAppSelector((state) => state.experience);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setExperience({
        name: "dev",
        job: experiences_jobs,
        changeLanguage: indexLanguage,
      })
    );
  }, []);

  // Change property css for width of contentExperience reference
  useSetWidthExp(devRef, modelRef, contentExperience, nameExperience, indexLanguage);

  return (
    <article className={styles["experience-info"]}>
      <div className={styles["experience-navbar"]}>
        <h3 className={styles["experience-navbar-title"]}>
          {selectExp[indexLanguage]}
        </h3>
        <div
          className={styles["experience-navbar-jobs"]}
          ref={contentExperience}
        >
          <a
            ref={devRef}
            className={styles["jobs-experience"]}
            onClick={() => {
              dispatch(
                setExperience({
                  name: "dev",
                  job: experiences_jobs,
                  changeLanguage: indexLanguage,
                })
              );
            }}
          >
            {dev[indexLanguage]}
          </a>
          <a
            ref={modelRef}
            className={styles["jobs-experience"]}
            onClick={() => {
              dispatch(
                setExperience({
                  name: "model",
                  job: experiences_jobs,
                  changeLanguage: indexLanguage,
                })
              );
            }}
          >
            {modeling_3d[indexLanguage]}
          </a>
        </div>
      </div>
      <ExperienceList experiences={job} indexLanguage={indexLanguage} />
    </article>
  );
};
