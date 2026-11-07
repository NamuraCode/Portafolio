"use client";
import { info } from "@/db/info";
import { ContactInfo } from "@/components";
import { HelperTitle } from "@/helpers";
import { useGlobal } from "@/store";
import styles from "@/styles/Global.module.css";
import contactStyles from "@/components/ContactInfo/ContactInfo.module.css";

export const Contact = () => {
  const { title, intro, label, placeholder, status } = info.contact;
  const { language } = useGlobal();
  return (
    <section id="contact" className={`${styles.sections} ${styles.contact}`}>
      <HelperTitle title={title} index="04" center />
      <p className={`${contactStyles.intro} reveal`}>{intro[language]}</p>
      <ContactInfo labels={label} placeholder={placeholder} status={status} />
    </section>
  );
};
