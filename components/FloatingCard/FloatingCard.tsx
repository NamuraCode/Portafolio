import React from "react";
import { CanvasExperience } from "@/utils";

import styles from "./FloatingCard.module.css";
import { BorderButton } from "@/utils";
import { Model } from "./components";

export const FloatingCard = () => {
  return (
    <section className={styles.floatingCard}>
      <div className={styles.floatingCardButtons}>
        <BorderButton text="Contact" index={1} />
        <BorderButton text="Projects" index={2} />
        <BorderButton text="Experience" index={3} />
      </div>
      <CanvasExperience >
        <Model />
      </CanvasExperience>
    </section>
  );
};
