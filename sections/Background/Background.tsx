import { CanvasBg } from "@/components";
import styles from "./Background.module.css";

export const Background = () => {
  return (
    <section className={styles.background}>
      <div className={styles.bgBorderLeft} />
      <CanvasBg hasBorder hasBg={false} />
      <div className={styles.bgBorderRight} />
    </section>
  );
};
