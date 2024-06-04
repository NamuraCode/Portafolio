import React from "react";
import styles from "./BorderButtons.module.css";

interface BorderButtonsProps {
  index: number;
  text: string;
}

export const BorderButton = ({ text, index }: BorderButtonsProps) => {
  return <button id={`button${index}`} className={`${styles.borderButton}`}>{text}</button>;
};
