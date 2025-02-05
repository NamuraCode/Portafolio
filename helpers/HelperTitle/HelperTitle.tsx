"use client";
import { useGlobal } from "@/store";
import styles from "./HelperTitle.module.css";

interface HelperTitleProps {
  title: string[];
  center?: boolean;
}

export const HelperTitle = ({ title, center }: HelperTitleProps) => {
  const { language } = useGlobal()
  return (
    <div className={styles.helperTitle} style={{ justifyContent: center ? "center" : "auto" }}>
      <h2>{title[language]}</h2>
    </div>
  );
};
