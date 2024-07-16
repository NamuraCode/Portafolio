import { CanvasBg } from "@/components";
import styles from "./Background.module.css";

export const Background = () => {
  return (
    <section className={styles.background}>
      <CanvasBg hasBorder hasBg={false}/>
    </section>
  );
};
