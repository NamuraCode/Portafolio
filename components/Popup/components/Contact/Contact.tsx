import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <form className={styles.contact}>
        <fieldset>
          <input placeholder="name" type="text" required  />
          <label>Name</label>
        </fieldset>
        <fieldset>
          <input placeholder="email" type="email" required />
          <label>Email</label>
        </fieldset>
        <fieldset className={styles.contactTextarea}>
          <textarea placeholder="message" required />
          <label>Message</label>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
