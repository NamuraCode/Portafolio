import React from "react";
import { ModelCanvas } from "./components";

import styles from "./FloatingCard.module.css";
import { BorderButton } from "@/utils";

export const FloatingCard = () => {
  return (
    <section className={styles.floatingCard}>
      <div className={styles.floatingCardButtons}>
        <BorderButton text="Contact" index={1} />
        <BorderButton text="Projects" index={2} />
        <BorderButton text="Experience" index={3} />
      </div>
      <ModelCanvas />
    </section>
  );
};
