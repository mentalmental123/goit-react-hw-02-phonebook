import css from "./contactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectContacts, selectStatusFilter } from "../../redux/selectors";

export const Contacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  console.log(items);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {items
        .filter((el) =>
          el.name.toLocaleLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(({ name, phone, id }) => (
          <li className={css["contact-item"]} key={id}>
            {
              <p>
                {name}
                {": "}
                {phone}
              </p>
            }
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
};
