import { useEffect, useRef } from "react";

import { getInfo, useSetWidthExp } from "@/utils";
import { setExperience, useAppDispatch, useAppSelector } from "@/store";

import styles from "@/styles/Experience.module.css";

export const ExperienceSelector = () => {
  const devRef = useRef<HTMLAnchorElement>(null);
  const modelRef = useRef<HTMLAnchorElement>(null);
  const contentExperience = useRef<HTMLDivElement>(null);

  const { modeling_3d, dev, experiences_jobs } = getInfo();

  const { indexLanguage } = useAppSelector((state) => state.language);
  const { nameExperience } = useAppSelector((state) => state.experience);

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
  useSetWidthExp(
    devRef,
    modelRef,
    contentExperience,
    nameExperience,
    indexLanguage
  );

  return (
    <>
      <div className={styles["experience-navbar-jobs"]} ref={contentExperience}>
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
    </>
  );
};
