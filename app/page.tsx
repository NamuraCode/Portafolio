import {FloatingCard, Header} from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <FloatingCard />
    </main>
  );
}
