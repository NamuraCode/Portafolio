import Link from "next/link";
import styles from "./NavbarPoints.module.css";

const links = ["home", "experience", "projects", "about", "contact"];

export const NavbarPoints = () => {
  return (
    <div className={` ${styles.navbarPoints}`}>
      {links.map((link) => (
        <Link key={`link${link}`} href={`#${link}`} aria-label={link}></Link>
      ))}
    </div>
  );
};
