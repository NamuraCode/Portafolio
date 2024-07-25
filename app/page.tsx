import { HomePage } from "@/views";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="home" className={styles.main}>
      <HomePage />
    </main>
  );
}
