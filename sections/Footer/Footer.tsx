import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/NamuraCode", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/david-naranjo/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/naranjo_da63225", label: "Twitter" },
    { icon: Mail, href: "mailto:naranjo.david.1999@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
   <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.spaceY}>
            <h3 className={`${styles.textXL} ${styles.fontBold}`}>David Naranjo</h3>
            <p className={`${styles.muted} ${styles.textSm} ${styles.leadingRelaxed}`}>
              Building beautiful digital experiences with modern web
              technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.spaceY}>
            <h4 className={styles.navHeading}>
              Navigate
            </h4>
            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.navLink}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className={styles.spaceY}>
            <h4 className={styles.navHeading}>
              Connect
            </h4>
            <div className={styles.socialContainer}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={styles.socialLink}
                    target="_blank"
                  >
                    <Icon className={styles.icon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <div className={styles.bottomFlex}>
            <p className={`${styles.muted} ${styles.textSm}`}>
              © {currentYear} David Naranjo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
