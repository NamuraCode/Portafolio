import styles from "@/styles/Profile.module.css";
import { ProfileTitle, ProfileDescription } from "./components";

export const Profile = () => {
  return (
    <article>
      <ProfileTitle />
      <ProfileDescription />
    </article>
  );
};
