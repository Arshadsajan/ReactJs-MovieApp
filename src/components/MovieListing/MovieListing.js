import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { settings } from "../../common/settings";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  // console.log('in movie-listing');

  const state = useSelector(state => state.movies12)
  const movies = state.movies;
  const shows = state.shows;
  // console.log(movies.Response);
  let renderMovies = movies.Response === 'True' ?
    (movies.Search.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />
    })
    ) :
    (
      <div className="movie-error">
        <h3>Loading...</h3>
      </div>
    )

  let renderShows = shows.Response === 'True' ?
    (shows.Search.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />
    })
    ) :
    (
      <div className="movie-error">
        <h3>Loading...</h3>
      </div>
    )

  return (
    <div className="movie-container">

      <p className="movies-heading">Movies</p>
      <div className="movie-carousel-section">
        <div className="movie-wrapper">
          <Slider {...settings}>
            {renderMovies}
          </Slider>
        </div>
      </div>

      <p className="shows-heading">Shows</p>
      <div className="movie-wrapper2">
        {renderShows}
      </div>
    </div>
  );
};

export default MovieListing;
