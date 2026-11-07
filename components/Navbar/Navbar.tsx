"use client";

import Link from "next/link";

import { useGlobal } from "@/store";

import styles from "./Navbar.module.css";

interface NavbarProps {
  changeColor: boolean;
  items: string[][];
}

export const Navbar = ({ changeColor, items }: NavbarProps) => {
  const { language } = useGlobal();

  return (
    <nav className={`${styles.navbar} ${changeColor ? styles.navChange : ""}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={changeColor ? styles.changeColor : ""}>
            <Link href={`#${item[1].toLowerCase()}`}>
              {item[language]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
