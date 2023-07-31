import css from "./contactList.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { deleteContact } from "../../redux/actions";

function Contacts({ contact: { id, name, number } }) {
  // componentDidUpdate() {
  //   const { contact } = this.props;
  //   if (contact) {
  //     localStorage.setItem("contacts", JSON.stringify(contact));
  //     return;
  //   }
  // }

  // console.log(contact);

  // // const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css["contact-item"]} key={id}>
      <p>
        {name}
        {": "}
        {number}
      </p>
      <button key={id} onClick={handleDelete} className={css["contact-button"]}>
        delete
      </button>
    </li>
  );
}

export default Contacts;
