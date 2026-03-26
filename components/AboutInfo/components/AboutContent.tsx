"use client";

import { useGlobal } from "@/store";

import styles from "../AboutInfo.module.css";
import { HelperTitle } from "@/helpers";

interface AboutContentProps {
  description: string[];
}

export const AboutContent = ({ description }: AboutContentProps) => {
  const { language } = useGlobal();

  return (
    <div className={styles.aboutContent}>
      <div>
        <HelperTitle title={["Sobre Mi", "About Me"]} />
        <p>{description[language]}</p>
      </div>
    </div>
  );
};
