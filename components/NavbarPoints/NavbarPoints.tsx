import styles from "./NavbarPoints.module.css";

const links = ["home", "about", "skills", "projects", "contact"];

export const NavbarPoints = () => {
  return (
    <div className={styles.navbarPoints}>
      {links.map((link) => (
        <button key={`link${link}`}></button>
      ))}
    </div>
  );
};
