import { useAppSelector } from "@/store";
import styles from "@/styles/ProfileDescription.module.css";
import { getInfo } from "@/utils";

export const ProfileDescription = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { description } = getInfo();
  const splitDescription = description[indexLanguage].split('.')

  return (
    <>
      <p className={`${styles["profileTitle"]}`}>
        <span>{splitDescription.map((text)=>{
          return <span>{text}.</span>
        })}</span>
      </p>
    </>
  );
};
