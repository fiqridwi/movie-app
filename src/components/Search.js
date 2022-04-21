import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../actions";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

const Search = () => {
  const [searching, setSearching] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovie(searching));
  };
  const handleChange = (e) => {
    setSearching(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup size="sm" style={{ maxWidth: "30rem" }}>
        <FormControl
          placeholder="Search movie, series..."
          aria-label="Search movie, series..."
          aria-describedby="basic-addon2"
          value={searching}
          onChange={handleChange}
        />
        <Button
          variant="outline-warning"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Button
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;
