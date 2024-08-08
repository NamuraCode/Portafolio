import { info } from "@/db/info";
import { AboutContent } from "./components/AboutContent";
import styles from "./AboutInfo.module.css";
import { AboutImages } from "./components/AboutImages";

export const AboutInfo = () => {
  const { description } = info.aboutMe;
  return (
    <div className={styles.aboutInfo}>
      <AboutContent text={description} />
      <AboutImages />
    </div>
  );
};
