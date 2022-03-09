import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../actions";

const Search = () => {
  const [searching, setSearching] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(searchMovie(searching));
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearching(e.target.value);
    dispatch(searchMovie(searching));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={searching}
        placeholder="Movie, Series..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
