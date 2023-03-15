import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
// import { APIKey } from '../../common/apis/MovieApiKey';

const APIKey = process.env.REACT_APP_APIKey;

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (term) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=movie`
        );
        return response.data;
    });

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncMShows',
    async (term) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=series`
        );
        return response.data;
    });

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail',
    async (id) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        return response.data;
    });

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    showSearchLoader: false,
    movieSearchLoader: false,
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            console.log("Pending");
            return { ...state, movieSearchLoader: true };
        },
        [fetchAsyncShows.pending]: (state) => {
            console.log("Pending");
            return { ...state, showSearchLoader: true };
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, movies: payload, movieSearchLoader: false };
        },
        [fetchAsyncMovies.rejected]: (state) => {
            console.log("Rejected");
            return { ...state, movieSearchLoader: false };
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, shows: payload, showSearchLoader: false };
        },
        [fetchAsyncShows.rejected]: (state) => {
            console.log("Rejected");
            return { ...state, showSearchLoader: false };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, selectedMovieOrShow: payload };
        },
    }
});

// export const { addMovies } = movieSlice.actions;
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export const getMovieSearchLoader = (state) => state.movies.movieSearchLoader;
export const getShowSearchLoader = (state) => state.movies.showSearchLoader;
export default movieSlice.reducer;
