import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends";

    useEffect(() => {
        const fetchMovies = async () => {
            dispatch(fetchAsyncMovies(movieText));
            dispatch(fetchAsyncShows(showText));
        }
        fetchMovies();
    }, [dispatch])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;