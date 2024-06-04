"use client";

import { useState } from "react";
import styles from "./LanguageBtn.module.css";
import Image from "next/image";

export const LanguageBtn = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  const changeLanguage = () => {
    setIsSpanish(!isSpanish);
  };
  return (
    <div className={styles.languageBtn}>
      <Image
        src={"./images/button/languageBtn.svg"}
        width={94}
        height={94}
        alt="language"
      />
      <button onClick={changeLanguage}>
        {isSpanish ? "ES" : "EN"}
      </button>
    </div>
  );
};
