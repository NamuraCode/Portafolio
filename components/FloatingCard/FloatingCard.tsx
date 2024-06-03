import React from "react";
import { ModelCanvas } from "./components";

import styles from "./FloatingCard.module.css";
import { BorderButton } from "@/utils";

export const FloatingCard = () => {
  return (
    <section className={styles.floatingCard}>
      <div className={styles.floatingCardButtons}>
        <BorderButton text="Contact" bgColor="var(--color1)" />
        <BorderButton text="Projects" bgColor="var(--color1)" />
        <BorderButton text="Experience" bgColor="var(--color1)" />
      </div>
      <ModelCanvas />
    </section>
  );
};
