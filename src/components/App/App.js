import React from "react";
// import { nanoid } from "nanoid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import css from "./app.module.css";
import Search from "../Filter/Filter";
import Contacts from "../ContactList/ContactList";
import Form from "../ContactForm/ContactForm";

function App() {
  const { contacts } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);

  return (
    <div className={css["container"]}>
      <h1>Phonebook</h1>
      <Form></Form>
      <div>
        {contacts?.length === 0 ? (
          ""
        ) : (
          <>
            <h2>Contacts</h2>
            <Search></Search>
          </>
        )}
        <ul>
          {contacts?.length === 0 ? (
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
