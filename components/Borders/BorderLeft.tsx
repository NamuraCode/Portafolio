"use client";
import { useRouter }  from "next/navigation";
import styles from "./Borders.module.css";

export const BorderLeft = () => {
  const router = useRouter();
  return (
    <div className={styles.borderLeft}>
      <button className={styles.borderLLogo} onSubmit={() => router.push("#home")}>
        <svg
          width="136"
          height="137"
          viewBox="0 0 136 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ fill: "var(--color3)" }}
            d="M8.68089 36.4833C8.68089 36.4833 -0.327315 50.6377 0.705241 71.9885C1.7378 93.3393 15.082 110.109 15.082 110.109C15.082 110.109 30.9858 115.051 48.8808 110.654C66.7758 106.258 78.5485 93.4319 78.5485 93.4319C78.5485 93.4319 59.8933 87.2862 40.3789 72.3208C19.65 56.4241 8.68089 36.4833 8.68089 36.4833Z"
            fill="black"
          />
          <path
            style={{ fill: "var(--color3)" }}
            d="M96.6536 44.9343C95.8181 22.9372 82.4997 6.92664 75.7324 1.3219C100.971 4.88005 113.559 18.2011 120.39 26.0677C135.644 43.6355 136.307 66.215 134.932 76.3645C133.936 87.3304 129.307 96.741 126.938 101.217C113.93 102.307 89.9855 97.638 78.5491 93.4322C89.3317 80.815 97.489 66.9315 96.6536 44.9343Z"
            fill="black"
          />
          <path
            style={{ stroke: "var(--color3)" }}
            d="M117.894 28.6293C139.847 56.2485 135.254 96.4348 107.635 118.388C80.0155 140.341 39.8291 135.748 17.8759 108.129C-4.07728 80.5096 0.515925 40.3232 28.1351 18.37C55.7543 -3.58314 95.9407 1.01007 117.894 28.6293Z"
            stroke="black"
            strokeWidth="8"
          />
        </svg>
      </button>
    </div>
  );
};
