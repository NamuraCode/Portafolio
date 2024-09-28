"use client";
import { useGlobal } from "@/store";
import styles from "./HelperCursor.module.css";

interface HelperCursorProps {
  positions: { x: number; y: number };
}

export const HelperCursor = ({ positions }: HelperCursorProps) => {
  const { isCursorHover, cursorText } = useGlobal();
  return (
    <div
      className={`${styles.cursor} ${isCursorHover ? styles.cursorHover : ""}`}
      style={{ left: positions.x - 5, top: positions.y - 5 }}
    >
      <span>{cursorText}</span>
    </div>
  );
};
