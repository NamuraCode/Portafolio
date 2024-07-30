"use client";
import { useGlobal } from "@/store";
import styles from "../AboutInfo.module.css";

interface AboutContentProps {
  text: string[];
}

export const AboutContent = ({ text }: AboutContentProps) => {
  const { language } = useGlobal();
  return <p className={styles.aboutContent}>{text[language]}</p>;
};
