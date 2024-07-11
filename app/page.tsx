"use client";
import {
  Background,
  DesktopText,
  Header,
  Popup,
  FloatingCard,
} from "@/components";

import styles from "./page.module.css";
import { GlobalProvider } from "@/store";

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalProvider>
        <Header />
        <FloatingCard />
        <Popup />
      </GlobalProvider>
      <DesktopText />
      <Background />
    </main>
  );
}
