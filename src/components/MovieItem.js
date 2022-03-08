import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieItem = ({ data }) => {
  return (
    <Link className="link-details" to={data.imdbID}>
      <Card className="m-2">
        <Card.Img variant="top" src={data.Poster} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{data.Title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieItem;
