import styles from "@/styles/Profile.module.css";
import { ProfileTitle, ProfileDescription, ProfileImage } from "./components";

export const Profile = () => {
  return (
    <article className={styles['profile']}>
      <ProfileTitle />
      <div className={styles['profileDescription']}>
        <ProfileDescription />
        <ProfileImage />
      </div>
    </article>
  );
};
