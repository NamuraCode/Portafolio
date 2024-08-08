"use client";
import { useGlobal } from "@/store";
import styles from "../AboutInfo.module.css";

interface AboutContentProps {
  text: string[];
}

export const AboutContent = ({ text }: AboutContentProps) => {
  const { language } = useGlobal();
  return (
    <div className={styles.aboutContent}>
      <div>
        <p>{text[language]}</p>
      </div>
      <hr />
      <div>
        <h3>My favorite moments</h3>
        {/* <p>{text[language]}</p> */}
      </div>
      <hr />
      <div>
        <h3>Hobbies</h3>
        {/* <p>{text[language]}</p> */}
      </div>
    </div>
  );
};
