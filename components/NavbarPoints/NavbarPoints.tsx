import Link from "next/link";
import styles from "./NavbarPoints.module.css";
import globalStyles from "@/styles/Global.module.css";

const links = ["home", "about", "experience", "projects", "contact"];

export const NavbarPoints = ({ changeColor }: { changeColor: boolean }) => {
  return (
    <div className={` ${styles.navbarPoints}`}>
      {links.map((link) => (
        <Link
          className={
            changeColor
              ? `${styles.changeColorPoints} ${globalStyles.fadeIn}`
              : ""
          }
          key={`link${link}`}
          href={`#${link}`}
          aria-label={link}
        ></Link>
      ))}
    </div>
  );
};
