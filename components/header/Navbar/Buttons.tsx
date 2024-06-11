"use client";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";
import { useRef } from "react";
import { useGlobal } from "@/store";
const links = ["home", "Projects", "about", "contact"];

export const Buttons = () => {
  const pathname = usePathname();
  const buttonsRef = useRef<HTMLButtonElement>(null);

  const { navActive, setNavActive } = useGlobal();

  return (
    <div>
      {links.map((link, index) => {
        return (
          <button
            key={index}
            className={navActive === index ? styles.active : ""}
            onClick={() => {
              setNavActive(index);
            }}
          >
            {link}
          </button>
        );
      })}
    </div>
  );
};
