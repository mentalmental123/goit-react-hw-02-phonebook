import css from "./contactList.module.css";

function Contacts({ contact: { id, name, number }, deleteContact }) {
  // componentDidUpdate() {
  //   const { contact } = this.props;
  //   if (contact) {
  //     localStorage.setItem("contacts", JSON.stringify(contact));
  //     return;
  //   }
  // }

  // const {
  //   contact: { id, name, number },
  //   deleteContact,
  // } = this.props;
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

export default Contacts;
