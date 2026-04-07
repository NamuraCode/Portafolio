"use client";

import { useEffect, useRef } from "react";

import { useGlobal } from "@/store";
import styles from "./HelperCursor.module.css";

export const HelperCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isCursorHover, cursorText } = useGlobal();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 6}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.cursorContainer} ${isCursorHover ? styles.cursorHover : ""}`}
    >
      <div className={`${styles.cursor} ${isCursorHover ? styles.cursorBall : ""}`}></div>
      <span className={`${styles.cursorText} ${isCursorHover ? styles.showCursorText : ""}`}>
        {cursorText}
      </span>
    </div>
  );
};
