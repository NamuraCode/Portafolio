"use client";

import { useRef } from "react";
import { BorderLeft, BorderRight, Navbar, NavbarPoints } from "@/components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import styles from "./Header.module.css";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(
      headerRef.current,
      {
        position: "fixed",
        opacity: 1,
        scrollTrigger: {
          trigger: "#experience",
          start: "0%",
          end: "1%",
          markers: true,
          scrub: true,
        },
      }
    );
  }, {});
  return (
    <header ref={headerRef} className={styles.header}>
      <BorderLeft />
      <Navbar />
      <BorderRight />
      <NavbarPoints />
    </header>
  );
};
