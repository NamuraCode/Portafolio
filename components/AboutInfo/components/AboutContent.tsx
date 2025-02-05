"use client";

import { useGlobal } from "@/store";
import { info } from "@/db/info";

import styles from "../AboutInfo.module.css";
import { HelperTitle } from "@/helpers";

export const AboutContent = () => {
  const { language } = useGlobal();
  const { description } = info.aboutMe;

  return (
    <div className={styles.aboutContent}>
      <div>
        <HelperTitle title={["Sobre Mi", "About Me"]} />
        <p>{description[language]}</p>
      </div>
      <hr />
      <div>
        <h3>{}</h3>
        {/* <p>{text[language]}</p> */}
      </div>
      <hr />
      <div>
        <h3>Hobbies</h3>
        {/* <p>{text[language]}</p> */}
      </div>
    </div>
  );
};
