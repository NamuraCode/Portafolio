import styles from "./Header.module.css";
import { BorderLeft, BorderRight, Navbar  } from "@/components";

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
      <BorderLeft/>
      <Navbar />
      <BorderRight/>
    </header>
  );
};
