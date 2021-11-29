import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
  async (title) => {
    const movieText = title ? title : 'harry';
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    )
    if (response.status === 200) {
      const fetchedMovies = await response.data;
      return fetchedMovies
    }
  })
export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows',
  async (title) => {
    const showText = title ? title : 'friends';
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${showText}&type=series`
    )
    if (response.status === 200) {
      const fetchedShows = await response.data;
      return fetchedShows
    }
  });
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('shows/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    if (response.status === 200) {
      const details = await response.data;
      return details
    }
  });

const initialState = {
  movies: {},
  shows: {},
  movieDetail: {}
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      //core redux, uses imme for mutability.
      //{...state, payload}
      // redux tookit manages internally 
      // console.log(payload);
      state.movies = payload
    },
    removeMovieDetails: (state) => {
      return { ...state, movieDetail: {} };
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      return { ...state, movies: action.payload }
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload }
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, movieDetail: payload }
    }
  },
});

export const { addMovies, removeMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;