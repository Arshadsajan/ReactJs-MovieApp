import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ key, movie }) => {
  const { Title, Year, imdbID, Poster } = movie;
  // console.log('movie-card');

  return (
    <Link to={`/movie/${imdbID}`}>
      <div className="card-item">
        <img className="movie-poster" src={Poster} alt="peter" />
        <div className="movie-detail">
          <p className="movie-title">{Title}</p>
          <p className="movie-year">{Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
