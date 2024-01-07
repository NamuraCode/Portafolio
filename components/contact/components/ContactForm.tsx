import styles from "@/styles/ContactForm.module.css";
import mainStyles from "@/styles/MainStyles.module.css";

export const ContactForm = () => {
  return (
    <form className={styles.form}>
      <fieldset>
        <label htmlFor="name">You Name</label>
        <input id={"name"} type="text" placeholder="name lastname"></input>
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input id={"email"} type="text" placeholder="email"></input>
      </fieldset>
      <fieldset>
        <label htmlFor="message">message</label>
        <textarea id="message"></textarea>
      </fieldset>
      <button className={`${mainStyles.btn} ${styles.btnForm}`} type="submit">
        send
      </button>
    </form>
  );
};
