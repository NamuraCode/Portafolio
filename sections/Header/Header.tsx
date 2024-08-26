"use client";

import { useRef, useState } from "react";
import { BorderLeft, BorderRight, Navbar, NavbarPoints } from "@/components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import styles from "./Header.module.css";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [navDiff, setNavDiff] = useState(false);
  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,{
        position: "absolute",
      },
      {        
        position: "fixed",
        scrollTrigger: {
          trigger: "#about",
          start: "-1%",
          end: "-1%",
          scrub: true,
          onUpdate: (self) => {
            setNavDiff(self.progress > 0);
          }
        },
      }
    );
  }, {});
  return (
    <header ref={headerRef} className={styles.header}>
      <BorderLeft changeColor={navDiff} />
      <Navbar changeColor={navDiff} />
      <BorderRight changeColor={navDiff} />
      {/* <NavbarPoints changeColor={navDiff} /> */}
    </header>
  );
};
