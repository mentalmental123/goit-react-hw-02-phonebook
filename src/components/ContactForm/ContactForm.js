import css from "./contactForm.module.css";

function Form({ handleContactInfo, onSubmitForm }) {
  return (
    <form onSubmit={onSubmitForm} className={css["contact-form"]}>
      <div className={css["contact-form-container"]}>
        <label htmlFor="text">Name</label>
        <input
          className={css["contact-form-input"]}
          onChange={handleContactInfo}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="tel">Telephone</label>
        <input
          className={css["contact-form-input"]}
          onChange={handleContactInfo}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css["contact-form-button"]} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
