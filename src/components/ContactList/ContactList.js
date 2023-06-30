import css from "./contactList.module.css";
import React, { Component } from "react";

class Contacts extends Component {
  // componentDidUpdate() {
  //   const { contact } = this.props;
  //   if (contact) {
  //     localStorage.setItem("contacts", JSON.stringify(contact));
  //     return;
  //   }
  // }

  render() {
    const {
      contact: { id, name, number },
      deleteContact,
    } = this.props;
    return (
      <li className={css["contact-item"]} key={id}>
        <p>
          {name}
          {": "}
          {number}
        </p>
        <button
          key={id}
          onClick={() => deleteContact(id)}
          className={css["contact-button"]}
        >
          delete
        </button>
      </li>
    );
  }
}

export default Contacts;
