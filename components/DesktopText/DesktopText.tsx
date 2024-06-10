import Image from "next/image";

import styles from "./DesktopText.module.css";
import { Info } from "./components/Info";

export const DesktopText = () => {
  return (
    <section className={styles.desktopText}>
      <Info />
      <svg
        width="660"
        height="390"
        viewBox="0 0 660 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M602.273 99.7701C602.273 77.6787 584.365 59.7701 562.273 59.7701H59.3703C26.581 59.7701 0 33.0101 0 0V330.23C0 363.24 26.581 390 59.3703 390H660C628.118 390 602.273 363.981 602.273 331.885V99.7701Z"
          fill="#D9D9D9"
        />
      </svg>
    </section>
  );
};
