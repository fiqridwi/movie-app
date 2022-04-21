import React, { useEffect } from "react";
import MovieItem from "./MovieItem";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { fetchMovieSearch } from "../actions";
import { useDispatch } from "react-redux";

const Movie = () => {
  const search = useSelector((state) => state.searchReducer);
  const data = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieSearch(search.search[0]));
  }, [dispatch, search.search]);

  return (
    <div>
      <Container className="container-movie">
        {data.movie[0] &&
          data.movie[0].map((data, i) => {
            return <MovieItem key={i} data={data} />;
          })}
      </Container>
    </div>
  );
};

export default Movie;
