import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Movie = () => {
  const [item, setItem] = useState([]);
  const searchData = useSelector((state) => state.searchReducer);

  useEffect(() => {
    const fetchDataSearch = async () => {
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=f901f867&s=${searchData.search[0]}`
      );
      const result = await data.json();
      setItem(result.Search);
    };
    const fetchData = async () => {
      const data = await fetch("http://www.omdbapi.com/?apikey=f901f867&s=man");
      const result = await data.json();
      setItem(result.Search);
    };
    if (searchData.search[0]) {
      fetchDataSearch();
    } else {
      fetchData();
    }
    console.log(searchData.search[0]);
  }, [searchData]);

  return (
    <div>
      <Container className="container-movie">
        {item &&
          item.map((data, i) => {
            return <MovieItem key={i} data={data} />;
          })}
      </Container>
    </div>
  );
};

export default Movie;
