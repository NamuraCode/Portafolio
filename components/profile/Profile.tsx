import styles from "@/styles/Profile.module.css";
import { ProfileTitle, ProfileDescription, ProfileImage } from "./components";

export const Profile = () => {
  return (
    <article>
      <ProfileTitle />
      <div className="">
        <ProfileDescription />
        <ProfileImage />
      </div>
    </article>
  );
};
