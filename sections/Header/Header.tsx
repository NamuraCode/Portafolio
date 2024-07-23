import styles from "./Header.module.css";
import { BorderLeft, BorderRight, Navbar  } from "@/components";

export const Header = () => {
  return (
    <header className={styles.header}>
      <BorderLeft/>
      <Navbar />
      <BorderRight/>
    </header>
  );
};
