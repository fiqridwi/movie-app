import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

const MovieDetails = () => {
  let params = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=f901f867&i=${params.id}`
      );
      const result = await data.json();
      console.log(result);
      setItem(result);
    };

    fetchData();
  }, []);

  return (
    <Container className="d-flex mt-5" style={{ textAlign: "center" }}>
      <div className="details-image">
        <img src={item.Poster} alt="poster" />
      </div>
      <div className="details">
        <h1>{`${item.Title} (${item.Year})`}</h1>
        <p>{item.Plot}</p>
        <p>{item.Actors}</p>
        <h5>{`${item.imdbRating}/10`}</h5>
      </div>
    </Container>
  );
};

export default MovieDetails;
