import Link from "next/link";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="#about">about</Link>
        </li>
        <li>
          <Link href="#experience">experience</Link>
        </li>
        <li>
          <Link href="#projects">projects</Link>
        </li>
        <li>
          <Link href="#contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
