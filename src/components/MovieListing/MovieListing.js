import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows, getMovieSearchLoader, getShowSearchLoader } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import { Settings } from '../../common/settings';
import "./MovieListing.scss";

const MovieListing = () => {
    // const searchLoader = useSelector(getSearchLoader);
    const movieSearchLoader = useSelector(getMovieSearchLoader);
    const showSearchLoader = useSelector(getShowSearchLoader);
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    console.log(movies, " : ** Movies");
    console.log(shows, " : ** Shows");
    // let renderMovies, renderShows = "";

    // let renderMovies = movies.Response === "True" ? (
    //     movies.Search.map((movie, index) => (
    //         <MovieCard key={index} data={movie} />
    //     ))
    // ) : (
    //     <div className="movies-error">
    //         {/* <h3>{movies.Error}</h3> */}
    //         <h3>Series not found</h3>
    //     </div>
    // );

    // let renderShows = shows.Response === "True" ? (
    //     shows.Search.map((show, index) => (
    //         <MovieCard key={index} data={show} />
    //     ))
    // ) : (
    //     <div className='shows-error'>
    //         {/* <h3>{shows.Error}</h3> */}
    //         <h3>Series not found!</h3>
    //     </div>
    // )

    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                {movieSearchLoader ? (
                    <div className='loader-block'>
                        <h3 className="loder-tile">...Fetching</h3>
                    </div>
                ) : (
                    <div className="movie-container">
                        {
                            movies.Response === "True" ? (
                                <Slider {...Settings}>
                                    {
                                        movies.Search.map((movie, index) => (
                                            <MovieCard key={index} data={movie} />
                                        ))
                                    }
                                </Slider>
                            ) : (
                                <div className="movies-error">
                                    {/* <h3>{movies.Error}</h3> */}
                                    <h3>Movies not found</h3>
                                </div>
                            )
                        }
                    </div>
                )}

            </div>

            <div className="show-list">
                <h2>Shows</h2>
                {showSearchLoader ? (
                    <div className='loader-block'>
                        <h3 className="loder-tile">...Fetching</h3>
                    </div>
                ) : (
                    <div className="movie-container">
                        {
                            shows.Response === "True" ? (
                                <Slider {...Settings}>
                                    {
                                        shows.Search.map((show, index) => (
                                            <MovieCard key={index} data={show} />
                                        ))
                                    }
                                </Slider>
                            ) : (
                                <div className='shows-error'>
                                    {/* <h3>{shows.Error}</h3> */}
                                    <h3>Series not found!</h3>
                                </div>
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieListing;