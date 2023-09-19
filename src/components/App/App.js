import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContact } from "../../redux/operations";
import { selectError, selectIsLoading } from "../../redux/selectors";

import css from "./app.module.css";
import Search from "../Filter/Filter";
import Contacts from "../ContactList/ContactList";
import Form from "../ContactForm/ContactForm";

function App() {
  const { items } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading) || null;
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className={css["container"]}>
      <h1>Phonebook</h1>
      <Form></Form>
      <div>
        {items?.length === 0 ? (
          <p>There is nothing</p>
        ) : (
          <>
            <h2>Contacts</h2>
            <Search></Search>
            <Contacts />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
