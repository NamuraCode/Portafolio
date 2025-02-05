import { info } from "@/db/info";
import { ContactInfo } from "@/components";
import { HelperTitle } from "@/helpers";
import styles from "@/styles/Global.module.css";

export const Contact = () => {
  const { title } = info.contact;
  return (
    <section id="contact" className={`${styles.sections} ${styles.contact}`}>
      <HelperTitle title={title} center></HelperTitle>
      <ContactInfo />
    </section>
  );
};
