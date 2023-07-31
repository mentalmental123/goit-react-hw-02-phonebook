import { combineReducers } from "redux";

const contactsInitialState = {
  contacts: [
    // { id: 1, name: "alexey", number: 4214124214 },
    // { id: 2, name: "olya", number: 2312424 },
    // { id: 3, name: "matvey", number: 688868555 },
  ],
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contact/addContact": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case "contact/deleteContact": {
      //   localStorage.setItem("contacts", JSON.stringify(action.payload));
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};

const filterInitialState = {
  filter: "",
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "contact/setFilter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

//     (state = {}, action) => {
//   // Повертаємо об'єкт стану
//   return {
//     // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//     contacts: contactsReducer(state.contacts, action),
//     filter: filterReducer(state.filter, action),
//   };
// };
