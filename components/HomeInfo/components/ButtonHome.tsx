import Link from "next/link";
import styles from "../HomeInfo.module.css"

interface HomeContactProps {
    text: string
    redirect: string
    image: JSX.Element
}

export const ButtonHome = ({ text, image, redirect }: HomeContactProps) => {
  return (
    <Link href={redirect} className={styles.buttonHome} target="_blank">
      {image}
      <span>{text}</span>
    </Link>
  );
};
