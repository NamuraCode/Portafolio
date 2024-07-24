import styles from "./NavbarPoints.module.css"

const links = [ "about", "about", "skills", "projects", "contact" ]

export const NavbarPoints = () => {
  return (
    <div className={styles.navbarPoints}>
        {links.map((link) => <button key={link}></button>)}
    </div>
  )
}
