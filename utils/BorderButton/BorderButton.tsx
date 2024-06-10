"use client";
import { useGlobal } from "@/store";

import styles from "./BorderButtons.module.css";

interface BorderButtonsProps {
  index: number;
  text: string;
}

export const BorderButton = ({ text, index }: BorderButtonsProps) => {
  const { setTogglePopup } = useGlobal();

  return (
    <button
      id={`button${index}`}
      className={`${styles.borderButton}`}
      onClick={() => {
        text == "Contact" && setTogglePopup();
      }}
    >
      {text}
    </button>
  );
};
