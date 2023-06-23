import React from "react";
import { nanoid } from "nanoid";

import css from "./app.module.css";
import Search from "../Filter/Filter";
import Contacts from "../ContactList/ContactList";
import Form from "../ContactForm/ContactForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };
  }

  printContacts = (formState) => {
    const { name, number } = formState;
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    }));
  };

  findContacts = (evt) => {
    const FilterQuerry = evt.target.value;
    // console.log(FilterQuerry);
    this.setState({ filter: FilterQuerry });
  };

  deleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (contacts) => contactId !== contacts.id
      ),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={css["container"]}>
        <h1>Phonebook</h1>
        <Form
          printContacts={this.printContacts}
          contactsArr={this.state.contacts}
          // handleContactInfo={this.handleContactInfo}
          // onSubmitForm={this.onSubmitForm}
        ></Form>
        <div>
          <h2>Contacts</h2>
          <Search findContacts={this.findContacts}></Search>
          <ul>
            {contacts.length === 0 ? (
              <li>There is nothing</li>
            ) : (
              contacts
                .filter((el) =>
                  el.name
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase().trim())
                )
                .map((contact) => (
                  <Contacts
                    key={contact.id}
                    contact={contact}
                    deleteContact={this.deleteContact}
                  ></Contacts>
                ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
