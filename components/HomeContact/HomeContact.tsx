"use client";
import { useGlobal } from "@/store";
import { info } from "@/db/info";
import styles from "./HomeContact.module.css";
import Link from "next/link";

export const HomeContact = () => {
  const { language } = useGlobal();
  const { header } = info;
  return (
    <Link href="#contact" className={styles.HomeContent} aria-label="contact">
      <span>{header.contact[language]}</span>
    </Link>
  );
};
