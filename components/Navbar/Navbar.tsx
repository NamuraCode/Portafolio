"use client";

import Link from "next/link";

import { info } from "@/db/info";
import { useGlobal } from "@/store";

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
      </ul>
    </nav>
  );
};
