import { nanoid } from "nanoid";

export const addContact = (cName, cNumber) => {
  return {
    type: "contact/addContact",
    payload: {
      id: nanoid(),
      name: cName,
      number: cNumber,
    },
  };
};

export const deleteContact = (cID) => {
  return {
    type: "contact/deleteContact",
    payload: cID,
  };
};

export function setFilter(Cfilter) {
  return {
    type: "contact/setFilter",
    payload: Cfilter,
  };
}
