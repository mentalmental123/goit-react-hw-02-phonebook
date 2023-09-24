import css from "./filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterContactsSlice";

export const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className={css["search-form"]}>
      <label htmlFor="text">Find contacts by name</label>
      <input
        onChange={(evt) => dispatch(setFilter(evt.target.value))}
        type="text"
      ></input>
    </div>
  );
};
