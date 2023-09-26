import { ProfileTitle } from "@/components";
import styles from "@/styles/ProfileMain.module.css";

export const ProfileMain = () => {
  return (
    <section className={`${styles["profileMain"]}`}>
      <ProfileTitle />
    </section>
  );
};
