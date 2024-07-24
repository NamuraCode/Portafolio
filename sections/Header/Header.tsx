import styles from "./Header.module.css";
import { BorderLeft, BorderRight, Navbar, NavbarPoints  } from "@/components";

export const Header = () => {
  return (
    <header className={styles.header}>
      <BorderLeft/>
      <Navbar />
      <BorderRight/>
      <NavbarPoints />
    </header>
  );
};
