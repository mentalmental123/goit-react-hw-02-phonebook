import css from "./contactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Contacts() {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts
        .filter((el) =>
          el.name.toLocaleLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(({ name, number, id }) => (
          <li className={css["contact-item"]} key={id}>
            <p>
              {name}
              {": "}
              {number}
            </p>
            <button
              key={id}
              onClick={() => handleDelete(id)}
              className={css["contact-button"]}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default Contacts;
