import {FloatingCard, Header} from "@/components";
import styles from "./page.module.css";
import { DesktopText } from "@/components/DesktopText/DesktopText";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <FloatingCard />
      <DesktopText />
    </main>
  );
}
