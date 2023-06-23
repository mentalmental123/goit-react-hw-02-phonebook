import css from "./contactList.module.css";

function Contacts({ contact, deleteContact }) {
  const { id, name, number } = contact;
  console.log(id);
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
