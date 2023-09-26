import { Profile } from "@/components";
import styles from "@/styles/ProfileMain.module.css";

export const ProfileMain = () => {
  return (
    <section id='about' className={`${styles["profileMain"]}`}>
      <Profile />
    </section>
  );
};
