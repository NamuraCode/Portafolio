import { HelperSlider } from "@/helpers";
import { AboutContent } from "./components/AboutContent";
import styles from "./AboutInfo.module.css";

interface AboutInfoProps {
  images: string[];
  description: string[];
}

export const AboutInfo = ({ images, description }: AboutInfoProps) => {
  return (
    <div className={styles.aboutInfo}>
      <AboutContent description={description} />
      <HelperSlider imagePropsAbout={images} />
    </div>
  );
};
