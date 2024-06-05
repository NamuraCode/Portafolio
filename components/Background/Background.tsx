import { CanvasExperience } from "@/utils";
import React from "react";
import Objects from "./components/Objects";

import styles from "./Background.module.css";

export const Background = () => {
  return (
    <section className={styles.background}>
      <CanvasExperience>
        <Objects />
      </CanvasExperience>
    </section>
  );
};
