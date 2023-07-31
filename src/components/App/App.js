import React, { useEffect } from "react";
// import { nanoid } from "nanoid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import css from "./app.module.css";
import Search from "../Filter/Filter";
import Contacts from "../ContactList/ContactList";
import Form from "../ContactForm/ContactForm";
import { addContact } from "../../redux/contactsSlice";

function App() {
  const { contacts } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  // localstorage

  useEffect(() => {
    const contactsSavedData = JSON.parse(localStorage.getItem("contacts"));
    if (contactsSavedData) {
      contactsSavedData.map(({ name, number }) =>
        dispatch(addContact(name, number))
      );
    }
    return;
  }, []);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      return;
    }
  }, [contacts]);

  return (
    <div className={css["container"]}>
      <h1>Phonebook</h1>
      <Form></Form>
      <div>
        {contacts.length === 0 ? (
          ""
        ) : (
          <>
            <h2>Contacts</h2>
            <Search></Search>
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
                  .includes(filter.toLowerCase().trim())
              )
              .map((contact) => <Contacts contact={contact}></Contacts>)
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
