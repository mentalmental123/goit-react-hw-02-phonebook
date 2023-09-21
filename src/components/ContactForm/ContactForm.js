import css from "./contactForm.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";

export default function Form() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.contacts);

  const onSubmitForm = (evt) => {
    evt.preventDefault();

    const form = evt.target;

    if (items.find(({ name: nameInArr }) => nameInArr === form.name.value)) {
      alert(form.name.value + " is already in contacts");
      form.reset();
      return;
    }

    const item = {
      name: form.name.value,
      phone: form.number.value,
    };

    dispatch(addContact(item));
    form.reset();
  };

  return (
    <form onSubmit={onSubmitForm} className={css["contact-form"]}>
      <div className={css["contact-form-container"]}>
        <label htmlFor="text">Name</label>
        <input
          className={css["contact-form-input"]}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="tel">Telephone</label>
        <input
          className={css["contact-form-input"]}
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
