import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAsyncMovieOrShowDetail, removeMovieDetails } from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movies12.movieDetail);

  console.log(movie);

  useEffect(() => {
    // console.log('movie-detail-useEffect');
    dispatch(
      fetchAsyncMovieOrShowDetail(imdbID),
    );
    return () => {
      dispatch(removeMovieDetails());
    };
  }, [dispatch, imdbID]);

  const renderList = Object.keys(movie).length === 0 || movie.Response === 'False' ? (<div className="movie-loading">
    <h3>Loading...</h3>
  </div>) :
    (<div className="movie-section">
      <div className="section-left">
        <h2>{movie.Title}</h2>
        <div className="rating-section">
          <p>IMDB Rating <i className="fa fa-star"></i> : {movie.imdbRating}</p>
          <p>IMDB Votes <i className="fa fa-thumbs-up"></i> : {movie.imdbVotes}</p>
          <p>Runtime <i className="fa fa-film"></i> : {movie.imdbRating}</p>
          <p>Year <i className="fa fa-calendar"></i> : {movie.Year}</p>
        </div>
        <p className="movie-plot">
          {movie.Plot}
        </p>
        <div className="movie-characters">
          <div className="movie-characters-flex">
            <span>Director</span>
            <span>{movie.Director}</span>
          </div>
          <div className="movie-characters-flex">
            <span>Stars</span>
            <span>{movie.Actors}</span>
          </div>
          <div className="movie-characters-flex">
            <span>Generes</span>
            <span>{movie.Genre}</span>
          </div>
          <div className="movie-characters-flex">
            <span>Language</span>
            <span>{movie.Language}</span>
          </div>
          <div className="movie-characters-flex">
            <span>Awards</span>
            <span>{movie.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={movie.Poster} alt="poster" />
      </div>
    </div>
    )
  return <>{renderList}</>
};

export default MovieDetail;