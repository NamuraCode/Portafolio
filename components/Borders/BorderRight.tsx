"use client";

import { useState } from "react";
import { useGlobal } from "@/store";

import styles from "./Borders.module.css";

export const BorderRight = () => {
  const [language, setLanguageButton] = useState(true);
  const { setLanguage } = useGlobal();

  const setLanguageState = () => {
    setLanguageButton(!language);
    return setLanguage(language ? 0 : 1);
  };

  return (
    <div className={styles.borderRight}>
      <button
        className={styles.borderRLanguage}
        onClick={setLanguageState}
        name="language"
      >
        {language ? "ES" : "EN"}
      </button>
      <button className={styles.borderRTheme} name="theme">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11.8682"
            y="11.9115"
            width="7.73585"
            height="7.73586"
            rx="3.86793"
            transform="rotate(180 11.8682 11.9115)"
            fill="#363639"
          />
          <rect
            x="8.77393"
            y="3.40201"
            width="1.54717"
            height="3.09434"
            rx="0.773585"
            transform="rotate(180 8.77393 3.40201)"
            fill="#363639"
          />
          <rect
            x="8.89258"
            y="16.0769"
            width="1.7852"
            height="3.5704"
            rx="0.892599"
            transform="rotate(180 8.89258 16.0769)"
            fill="#363639"
          />
          <rect
            x="3.35742"
            y="7.26999"
            width="1.54717"
            height="3.09434"
            rx="0.773585"
            transform="rotate(90 3.35742 7.26999)"
            fill="#363639"
          />
          <rect
            x="15.7354"
            y="7.26999"
            width="1.54717"
            height="3.09434"
            rx="0.773585"
            transform="rotate(90 15.7354 7.26999)"
            fill="#363639"
          />
          <rect
            x="5.26514"
            y="4.21451"
            width="1.54717"
            height="3.09434"
            rx="0.773585"
            transform="rotate(135 5.26514 4.21451)"
            fill="#363639"
          />
          <rect
            x="14.0171"
            y="12.9666"
            width="1.54717"
            height="3.09434"
            rx="0.773585"
            transform="rotate(135 14.0171 12.9666)"
            fill="#363639"
          />
          <rect
            x="4.1709"
            y="10.7786"
            width="1.54717"
            height="3.09434"
            rx="0.773585"
            transform="rotate(45 4.1709 10.7786)"
            fill="#363639"
          />
          <rect
            x="12.9224"
            y="2.02649"
            width="1.54717"
            height="3.09434"
            rx="0.773585"
            transform="rotate(45 12.9224 2.02649)"
            fill="#363639"
          />
        </svg>
      </button>
    </div>
  );
};
