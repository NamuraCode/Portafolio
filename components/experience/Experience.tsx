"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook/useRedux";
import { setExperience } from "@/store/slice/experienceSlice/experienceSlice";
import { getInfo, useSetWidthExp } from "@/utils";
import styles from "@/styles/Experience.module.css";
import { Marquee } from "../marquee/Marquee";

export const Experience = () => {
  const devRef = useRef<HTMLAnchorElement>(null);
  const modelRef = useRef<HTMLAnchorElement>(null);
  const contentExperience = useRef<HTMLDivElement>(null);

  const { select, modeling_3d, experiences_jobs } = getInfo();

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
  useSetWidthExp(devRef, modelRef, contentExperience, nameExperience);

  return (
    <article className={styles["experience-info"]}>
      <div className={styles["experience-navbar"]}>
        <h3 className={styles["experience-navbar-title"]}>
          {select[indexLanguage]}
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
            Developer
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
      <div className={styles["experience-navbar-main"]}>
        <ul className={styles["experience-navbar-items"]}>
          {job.map((item, index) => {
            return (
              <li className={styles["experience-navbar-item"]} key={index}>
                <a
                  key={index}
                  className={styles["experience-item"]}
                  href={`#${index}`}
                >
                  {item.date[indexLanguage]}
                </a>
                <div className={styles["experience-item-info"]}>
                  <p>
                    <span>{item.company}</span>
                    <br />
                    {item.description[indexLanguage]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        {/* <Marquee /> */}
      </div>
    </article>
  );
};
