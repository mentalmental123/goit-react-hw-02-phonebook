import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// const localStorageContacts =
//   localStorage.getItem("contacts") === null
//     ? []
//     : JSON.parse(localStorage.getItem("contacts"));

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
      },
      prepare(cName, cNumber) {
        return {
          payload: {
            id: nanoid(),
            name: cName,
            number: cNumber,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      // localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
