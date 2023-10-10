import { useAppSelector } from "@/store";
import styles from "@/styles/ProfileTitle.module.css";
import { getInfo } from "@/utils";

export const ProfileTitle = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { about } = getInfo();

  return (
    <>
      <h2 className={`${styles["profileTitle"]}`}>{about[indexLanguage]}</h2>
    </>
  );
};
