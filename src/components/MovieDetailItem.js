import React from "react";
import { Container } from "react-bootstrap";

const MovieDetailItem = ({ data }) => {
  return (
    <Container className="d-flex mt-5" style={{ textAlign: "center" }}>
      <div className="details-image">
        <img src={data.Poster} alt="poster" />
      </div>
      <div className="details">
        <h1>{`${data.Title} (${data.Year})`}</h1>
        <p>{data.Plot}</p>
        <p>{data.Actors}</p>
        <h5>{`${data.imdbRating}/10`}</h5>
      </div>
    </Container>
  );
};

export default MovieDetailItem;
