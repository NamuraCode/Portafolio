"use client";
import Link from "next/link";

import { useGlobal } from "@/store";
import { info } from "@/db/info";

import styles from "./Navbar.module.css";

export const Navbar = ({ changeColor }: { changeColor: boolean }) => {
  const { language } = useGlobal();
  const { header } = info;

  return (
    <nav className={`${styles.navbar} ${changeColor ? styles.navChange : ""}`}>
      <ul>
        {header.map((item, index)=>(
          <li key={index} className={changeColor ? styles.changeColor : ""}>
          <Link href={`#${item[1]}`} aria-label={item[language]}>
            {item[language]}
          </Link>
        </li>
        ))}
        {/* <li className={changeColor ? styles.changeColor : ""}>
          <Link href="#about" aria-label="about">
            {header.about[language]}
          </Link>
        </li>
        <li className={changeColor ? styles.changeColor : ""}>
          <Link href="#experience" aria-label="experience">
            {header.experience[language]}
          </Link>
        </li>
        <li className={changeColor ? styles.changeColor : ""}>
          <Link href="#projects" aria-label="projects">
            {header.projects[language]}
          </Link>
        </li>
        <li className={changeColor ? styles.changeColor : ""}>
          <Link href="#contact" aria-label="contact">
            {header.contact[language]}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};
