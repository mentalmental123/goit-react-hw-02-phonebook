import css from "./filter.module.css";

function Search({ findContacts }) {
  return (
    <div className={css["search-form"]}>
      <label htmlFor="text">Find contacts by name</label>
      <input onChange={findContacts} type="text"></input>
    </div>
  );
}

export default Search;
