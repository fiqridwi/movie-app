import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieItem = ({ data }) => {
  return (
    <Link className="link-details" to={data.imdbID}>
      <Card className="m-2">
        <Card.Img
          variant="top"
          src={data.Poster}
          style={{ maxHeight: "30rem", objectFit: "cover" }}
        />
        <Card.Body style={{ backgroundColor: "#ffc93c", color: "black" }}>
          <Card.Text style={{ textAlign: "center" }}>{data.Title}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieItem;
