export const ContactForm = () => {

    return (
        <form>
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
      </form>
     )
  }