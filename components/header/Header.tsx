import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";
import { LanguageBtn } from "./LanguageBtn/LanguageBtn";
import { Navbar } from "./Navbar/Navbar";

interface Links {
  name: string;
  url: string;
  image: string;
}

const links: Links[] = [
  {
    name: "github",
    url: "https://github.com/NamuraCode",
    image: "./images/github.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/david-naranjo/",
    image: "./images/linkedin.svg",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/david_naranjo_999/?hl=es",
    image: "./images/instagram.svg",
  },
  {
    name: "artstation",
    url: "https://www.artstation.com/david_naranjo",
    image: "./images/artstation.svg",
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLinks}>
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.url} target="_blank" >
              <Image src={link.image} width={22} height={22} alt={link.name} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
      <LanguageBtn />
      <Navbar />
    </header>
  );
};
