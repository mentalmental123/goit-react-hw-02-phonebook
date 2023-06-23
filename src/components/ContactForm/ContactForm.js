import css from "./contactForm.module.css";
import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      number: "",
    };
  }

  handleContactInfo = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = (evt) => {
    evt.preventDefault();
    const contacts = this.props.contactsArr;
    if (contacts.find(({ name }) => name === this.state.name)) {
      alert(this.state.name + " is already in contacts");
      return;
    }

    this.props.printContacts(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className={css["contact-form"]}>
        <div className={css["contact-form-container"]}>
          <label htmlFor="text">Name</label>
          <input
            className={css["contact-form-input"]}
            onChange={this.handleContactInfo}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="tel">Telephone</label>
          <input
            className={css["contact-form-input"]}
            onChange={this.handleContactInfo}
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
}
