"use client";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons/BrandIcons";
import { info } from "@/db/info";
import { useGlobal } from "@/store";
import styles from "./Footer.module.css";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/NamuraCode", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/david-naranjo/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:naranjo.david.1999@gmail.com", label: "Email" },
];

export default function Footer() {
  const { language } = useGlobal();
  const { footer, header } = info;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: footer.home[language], href: "#home" },
    ...header.map((item) => ({
      label: item[language],
      href: `#${item[1].toLowerCase()}`,
    })),
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.spaceY}>
            <h3 className={styles.textXL}>David Naranjo</h3>
            <p className={`${styles.muted} ${styles.textSm} ${styles.leadingRelaxed}`}>
              {footer.tagline[language]}
            </p>
          </div>

          <div className={styles.spaceY}>
            <h4 className={styles.navHeading}>{footer.navigate[language]}</h4>
            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.spaceY}>
            <h4 className={styles.navHeading}>{footer.connect[language]}</h4>
            <div className={styles.socialContainer}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className={styles.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider}>
          <div className={styles.bottomFlex}>
            <p className={`${styles.muted} ${styles.textSm}`}>
              © {currentYear} David Naranjo. {footer.copy[language]}
            </p>
            <button
              type="button"
              className={styles.backToTop}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {footer.backToTop[language]}
              <ArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
