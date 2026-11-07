import { HelperSlider } from "@/helpers";
import type { SkillGroup } from "@/db/info";
import { AboutContent } from "./components/AboutContent";
import styles from "./AboutInfo.module.css";

interface AboutInfoProps {
  images: string[];
  title: string[];
  description: string[];
  skillsTitle: string[];
  skills: SkillGroup[];
}

export const AboutInfo = ({ images, ...content }: AboutInfoProps) => {
  return (
    <div className={styles.aboutInfo}>
      <AboutContent {...content} />
      <HelperSlider imagePropsAbout={images} />
    </div>
  );
};
