import { Background, FloatingCard, Header, DesktopText } from "@/components";
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
