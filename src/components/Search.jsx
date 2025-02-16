import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterContacts,
  resetFilter,
  setSearchTerm,
} from "../../store/slices/contactsSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchTerm(search));
      if (search.trim()) {
        dispatch(filterContacts(search));
      } else {
        dispatch(resetFilter());
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [search, dispatch]);

  return (
    <div className="search d-flex align-items-center gap-3 position-relative mb-3">
      <input
        className="w-100 p-2 border-1 rounded"
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search-btn">
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
};

export default Search;
