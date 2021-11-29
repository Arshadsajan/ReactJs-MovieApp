import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  console.log('in home');
  // const movieText = 'harry'
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('home - use effect');
    // const fetchMovies = async () => {
    //   const response = await movieApi.get(
    //     `?apiKey=${APIKey}&s=${movieText}&type=movie`
    //   )
    //     .catch(err => console.log(err))
    //   // console.log(response);
    //   dispatch(addMovies(await response.data))
    // }
    // fetchMovies();
    dispatch(fetchAsyncMovies(''));
    dispatch(fetchAsyncShows(''));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
