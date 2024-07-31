import { CanvasBg } from "@/components";
import styles from "./Background.module.css";

export const Background = () => {
  return (
    <section id="background" className={styles.background}>
      <svg
        className={styles.bgBorderUpLeft}
        width="121"
        height="121"
        viewBox="0 0 121 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{ fill: "var(--color1)" }}
          d="M92.1811 49.2637L92.1811 27.7508C92.1811 12.5444 105.636 -1.34315e-06 121 0L0.000152588 1.04907e-05L-2.94876e-06 121C-1.55781e-06 105.089 13.0417 92.1965 29.1172 92.2151C29.1172 92.2151 25.2574 92.2106 49.6601 92.2388C74.0628 92.267 92.1811 73.4162 92.1811 49.2637Z"
          fill="#FAFAFA"
        />
      </svg>
      <svg
        className={styles.bgBorderUpRight}
        width="121"
        height="121"
        viewBox="0 0 121 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{ fill: "var(--color1)" }}
          d="M92.1811 49.2637L92.1811 27.7508C92.1811 12.5444 105.636 -1.34315e-06 121 0L0.000152588 1.04907e-05L-2.94876e-06 121C-1.55781e-06 105.089 13.0417 92.1965 29.1172 92.2151C29.1172 92.2151 25.2574 92.2106 49.6601 92.2388C74.0628 92.267 92.1811 73.4162 92.1811 49.2637Z"
          fill="#FAFAFA"
        />
      </svg>
      <div className={styles.bgBorderLeft} />
      <CanvasBg hasBorder hasBg={false} />
      <div className={styles.bgBorderRight} />
    </section>
  );
};
