import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./NavbarPoints.module.css";

gsap.registerPlugin(ScrollTrigger);

const links = ["home", "about", "skills", "projects", "contact"];

export const NavbarPoints = () => {

  return (
    <div className={` ${styles.navbarPoints}`}>
      {links.map((link) => (
        <button key={`link${link}`} name={link}></button>
      ))}
    </div>
  );
};
