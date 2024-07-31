"use client";
import { useRef } from "react";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useGlobal } from "@/store";

import { info } from "@/db/info";
import styles from "./Navbar.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const { language } = useGlobal();
  const { header } = info;
  const navRef = useRef<HTMLUListElement>(null);
  useGSAP(() => {
    gsap.to(navRef.current, {
      position: "fixed",
      "--__colorNav": "var(--colorCaption)",
      scrollTrigger: {
        trigger: "#experience",
        start: "0%",
        end: "0%",
        markers: true,
        scrub: true,
      },
    });
  }, {});

  return (
    <nav ref={navRef} className={styles.navbar}>
      <ul>
        <li>
          <Link href="#about" aria-label="about">{header.about[language]}</Link>
        </li>
        <li>
          <Link href="#experience" aria-label="experience">{header.experience[language]}</Link>
        </li>
        <li>
          <Link href="#projects" aria-label="projects">{header.projects[language]}</Link>
        </li>
        <li>
          <Link href="#contact" aria-label="contact">{header.contact[language]}</Link>
        </li>
      </ul>
    </nav>
  );
};
