import { infoImagesAbout, ImageAboutProps } from "@/db/info";

import { HelperSlider } from "@/helpers";
import { AboutContent } from "./components/AboutContent";
import styles from "./AboutInfo.module.css";

export const AboutInfo = () => {
  // const { description } = info.aboutMe;
  const images: string[] = infoImagesAbout.map((item)=>{
    return item.images
  })
  
  return (
    <div className={styles.aboutInfo}>
      <AboutContent />
      <HelperSlider
        imagePropsAbout={images}
      />
    </div>
  );
};
