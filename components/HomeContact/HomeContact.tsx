"use client";
import { useGlobal } from "@/store";
import { info } from "@/db/info";
import styles from "./HomeContact.module.css";

export const HomeContact = () => {
  const { language } = useGlobal();
  const { header } = info;
  return (
    <button className={styles.HomeContent}>
      <span>{header.contact[language]}</span>
    </button>
  );
};
