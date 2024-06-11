import { CanvasExperience } from "@/utils";

import { Objects } from "./components/Objects";
import styles from "./Background.module.css";

export const Background = () => {
  return (
    <section className={styles.background}>
      <CanvasExperience hasBg={false}>
        <Objects />
      </CanvasExperience>
    </section>
  );
};
