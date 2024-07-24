import { HomePage, ExperiencePage } from "@/views";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <ExperiencePage />
    </main>
  );
}
