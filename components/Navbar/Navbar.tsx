"use client";
import { info } from "@/db/info";
import Link from "next/link";

import styles from "./Navbar.module.css";
import { useGlobal } from "@/store";

export const Navbar = () => {
  const { language } = useGlobal() 
  const { header } = info
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="#about">{header.about[language]}</Link>
        </li>
        <li>
          <Link href="#experience">{header.experience[language]}</Link>
        </li>
        <li>
          <Link href="#projects">{header.projects[language]}</Link>
        </li>
        <li>
          <Link href="#contact">{header.contact[language]}</Link>
        </li>
      </ul>
    </nav>
  );
}
