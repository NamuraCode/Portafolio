import { Contact } from "@/components";
import styles from "@/styles/ContactMain.module.css";
import mainStyles from "@/styles/MainStyles.module.css";
export const ContactMain = () => {
  return (
    <section id={'contact'} className={`${styles["contact-main"]} ${mainStyles["others"]}`}>
      <Contact /> 
    </section>
  );
};
