import Link from "next/link";
import styles from "../HomeInfo.module.css"
import { ReactNode } from "react";

interface HomeContactProps {
    text: string
    redirect: string
    image: ReactNode
}

export const ButtonHome = ({ text, image, redirect }: HomeContactProps) => {
  return (
    <Link href={redirect} className={styles.buttonHome} target="_blank" aria-label={text}
      rel="noopener noreferrer">
      {image}
      <span>{text}</span>
    </Link>
  );
};
