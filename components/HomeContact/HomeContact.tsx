"use client";
import { useGlobal } from "@/store";
import styles from "./HomeContact.module.css";
import Link from "next/link";

interface HomeContactProps {
  contactLabel: string[];
}

export const HomeContact = ({ contactLabel }: HomeContactProps) => {
  const { language } = useGlobal();
  return (
    <Link href="#contact" className={styles.HomeContent} aria-label="contact">
      <span>{contactLabel[language]}</span>
    </Link>
  );
};
