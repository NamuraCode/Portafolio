import { ContactMap, ContactForm } from "./components";

import styles from "@/styles/Contact.module.css";

export const Contact = () => {
  return (
    <article className={styles.contact}>
      <ContactMap />
      <ContactForm />
    </article>
  );
};
