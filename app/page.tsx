import { Background, FloatingCard, Popup, DesktopText } from "@/components";
import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        {/* <Popup/> */}
        <FloatingCard />
        <DesktopText />
        <Background />
    </main>
  );
}
