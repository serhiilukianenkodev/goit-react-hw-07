import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.searchBox}>
      <h2>Find contacts by name</h2>
      <input
        className={css.searchInput}
        type="text"
        name=""
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

export default SearchBox;
