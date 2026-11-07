import { info, infoImagesAbout } from "@/db/info";
import { AboutInfo } from "@/components";
import styles from "@/styles/Global.module.css";

export const About = () => {
  const images = infoImagesAbout.map((item) => item.images);
  const { title, description, skillsTitle, skills } = info.aboutMe;
  return (
    <section id="about" className={styles.sections}>
      <AboutInfo
        images={images}
        title={title}
        description={description}
        skillsTitle={skillsTitle}
        skills={skills}
      />
    </section>
  );
};
