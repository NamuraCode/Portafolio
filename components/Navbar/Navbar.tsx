"use client";
import Link from "next/link";

import { useGlobal } from "@/store";
import { info } from "@/db/info";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { language } = useGlobal();
  const { header } = info;

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="#about" aria-label="about">
            {header.about[language]}
          </Link>
        </li>
        <li>
          <Link href="#experience" aria-label="experience">
            {header.experience[language]}
          </Link>
        </li>
        <li>
          <Link href="#projects" aria-label="projects">
            {header.projects[language]}
          </Link>
        </li>
        <li>
          <Link href="#contact" aria-label="contact">
            {header.contact[language]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
