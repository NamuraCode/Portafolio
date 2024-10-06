"use client";

import { useLayoutEffect } from "react";

import { useGlobal } from "@/store";
import styles from "./HelperCursor.module.css";

interface HelperCursorProps {
  positions: { x: number; y: number };
}

export const HelperCursor = ({ positions }: HelperCursorProps) => {
  const { isCursorHover, cursorText } = useGlobal();

  return (
    <div
      className={`${styles.cursorContainer}
        ${isCursorHover ? styles.cursorHover : ""}
      `}
      style={{ left: positions.x - 30, top: positions.y - 6 }}
    >
      <div
        className={`${styles.cursor} 
          ${isCursorHover ? styles.cursorBall : ""}
        `}
      ></div>
      <span className={`${styles.cursorText} ${isCursorHover ? styles.showCursorText : ""}`}>
        {cursorText}
      </span>
    </div>
  );
};
