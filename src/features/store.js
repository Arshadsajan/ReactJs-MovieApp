import { configureStore } from "@reduxjs/toolkit";
import movieReducers from './movies/movieSlice.js'
export const store = configureStore({
  reducer: {
    movies12: movieReducers
  },
})