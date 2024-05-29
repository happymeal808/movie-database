import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchPopularMovies } from '../api';

const MovieSlideshow = ({ fetchMovies = fetchPopularMovies }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const movies = await fetchMovies();
                setMovies(movies);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            }
        };

        getMovies();
    }, [fetchMovies]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="movie-slideshow">
            <Slider {...settings}>
                {movies.map(movie => (
                    <div key={movie.id} className="slide">
                        <img
                            src={movie.posterPath}
                            alt={movie.title}
                            className="slide-image"
                        />
                        <div className="slide-content">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

MovieSlideshow.propTypes = {
    fetchMovies: PropTypes.func,
};

export default MovieSlideshow;