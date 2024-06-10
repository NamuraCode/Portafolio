import { CanvasExperience } from "@/utils";

import { Model, Buttons } from "./components";
import styles from "./FloatingCard.module.css";

export const FloatingCard = () => {
  return (
    <section className={styles.floatingCard}>
      <div className={styles.floatingCardButtons}>
        <Buttons />
      </div>
      <CanvasExperience colorBg="#060602" hasBorder hasBg>
        <Model />
      </CanvasExperience>
    </section>
  );
};
