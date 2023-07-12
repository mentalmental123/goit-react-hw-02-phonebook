import css from "./contactForm.module.css";
import React, { useState } from "react";

export default function Form({ contactsArr, printContacts }) {
  // constructor() {
  //   super();

  //   this.state = {
  //     name: "",
  //     number: "",
  //   };
  // }

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleContactInfo = (evt) => {
    const { name, value } = evt.target;
    if (name === "name") {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    if (contactsArr.find(({ name: nameInArr }) => nameInArr === name)) {
      alert(name + " is already in contacts");
      return;
    }
    const tempState = { name, number };
    printContacts(tempState);
  };

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
