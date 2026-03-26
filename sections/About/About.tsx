import { info, infoImagesAbout } from "@/db/info";
import { AboutInfo } from "@/components";
import styles from "@/styles/Global.module.css";

export const About = () => {
  const images = infoImagesAbout.map((item) => item.images);
  const { description } = info.aboutMe;
  return (
    <section id="about" className={`${styles.sections} ${styles.about}`}>
      <AboutInfo images={images} description={description} />
    </section>
  );
};
