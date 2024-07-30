"use client";
import { useGlobal } from "@/store";
import styles from "./HelperTitle.module.css";

interface HelperTitleProps {
  title: string[];
  center?: boolean;
  children: React.ReactNode;
}

export const HelperTitle = ({ title, children, center }: HelperTitleProps) => {
  const { language } = useGlobal()
  return (
    <div className={styles.helperTitle} style={{ justifyContent: center ? "center" : "auto" }}>
      {children}
      <h2>{title[language]}</h2>
    </div>
  );
};
