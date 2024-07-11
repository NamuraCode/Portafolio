import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <form className={styles.contact}>
        <fieldset>
          <label>Name</label>
          <input type="text" required />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input type="email" required />
        </fieldset>
        <fieldset>
          <label>Message</label>
          <textarea required />
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
