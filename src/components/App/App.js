import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import css from "./app.module.css";
import Search from "../Filter/Filter";
import Contacts from "../ContactList/ContactList";
import Form from "../ContactForm/ContactForm";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [],
  //     filter: "",
  //   };
  // }

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const printContacts = (formState) => {
    const { name, number } = formState;
    setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
  };

  const findContacts = (evt) => {
    const FilterQuerry = evt.target.value;
    // console.log(FilterQuerry);
    setFilter(FilterQuerry);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contacts) => contactId !== contacts.id));
  };

  // localstorage

  useEffect(() => {
    const contactsSavedData = JSON.parse(localStorage.getItem("contacts"));
    if (contactsSavedData) {
      setContacts(contactsSavedData);
    }
  }, []);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      return;
    }
  }, [contacts]);

  // const { contacts, filter } = this.state;
  return (
    <div className={css["container"]}>
      <h1>Phonebook</h1>
      <Form
        printContacts={printContacts}
        contactsArr={contacts}
        // handleContactInfo={handleContactInfo}
        // onSubmitForm={onSubmitForm}
      ></Form>
      <div>
        {contacts.length === 0 ? (
          ""
        ) : (
          <>
            <h2>Contacts</h2>
            <Search findContacts={findContacts}></Search>
          </>
        )}
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
                  deleteContact={deleteContact}
                ></Contacts>
              ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
