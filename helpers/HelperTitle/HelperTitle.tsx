"use client";
import { useGlobal } from "@/store";
import styles from "./HelperTitle.module.css";

interface HelperTitleProps {
  title: string[];
  center?: boolean;
  index?: string;
}

export const HelperTitle = ({ title, center, index }: HelperTitleProps) => {
  const { language } = useGlobal();
  return (
    <div
      className={`${styles.helperTitle} ${center ? styles.center : ""} reveal`}
    >
      {index && (
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowIndex}>{index}</span>
          <span className={styles.eyebrowLine} />
        </span>
      )}
      <h2>{title[language]}</h2>
    </div>
  );
};
