import React, { useState, useEffect } from "react";
import MovieDetailItem from "./MovieDetailItem";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { fetchMovieDetail } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  let params = useParams();
  const movie = useSelector((state) => state.movieDetailReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetail(params.id));
  }, [params]);

  return (
    <Container>
      {movie.movie &&
        movie.movie.map((data, i) => {
          return <MovieDetailItem key={i} data={data} />;
        })}
    </Container>
  );
};

export default MovieDetails;
