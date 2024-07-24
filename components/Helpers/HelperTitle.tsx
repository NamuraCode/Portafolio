"use client";
import { useGlobal } from "@/store";
import styles from "./HelperTitle.module.css";

interface HelperTitleProps {
  title: string[];
  children: React.ReactNode;
}

export const HelperTitle = ({ title, children }: HelperTitleProps) => {
  const { language } = useGlobal()
  return (
    <div className={styles.helperTitle}>
      {children}
      <h2>{title[language]}</h2>
    </div>
  );
};
