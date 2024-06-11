"use client";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";
import { useRef } from "react";
const links = ["home", "Projects", "about", "contact"];

export const Buttons = () => {
  const pathname = usePathname();
  const buttonsRef = useRef<HTMLButtonElement[]>([]); 

  return (
    <>
        {links.map((link, index) => {
          return (
            <button
              key={index}
            >
              {link}
            </button>
          );
        })}
    </>
  );
};
