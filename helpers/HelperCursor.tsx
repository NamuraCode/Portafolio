"use client";
import styles from "./HelperCursor.module.css";

interface HelperCursorProps {
  positions: { x: number; y: number };
}

export const HelperCursor = ({ positions }: HelperCursorProps) => {
  return <div className={styles.cursor} style={{ left: positions.x - 5, top: positions.y - 5 }}></div>;
};
