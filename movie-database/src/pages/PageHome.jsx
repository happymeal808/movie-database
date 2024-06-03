import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadMoreButton from '../components/LoadMoreButton';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchTrendingMovies } from '../api';
import isFav from '../utils/isFav';
import CategoryButtons from '../components/CategoryButtons';

const PageHome = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('nowPlaying');
    const [visibleMoviesCount, setVisibleMoviesCount] = useState(20); // Initially load 20 movies
    const favs = useSelector((state) => state.favs.items);
    const [heroMovie, setHeroMovie] = useState(null); // State for hero movie

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let fetchedMovies;
                switch (category) {
                    case 'popular':
                        fetchedMovies = await fetchPopularMovies();
                        break;
                    case 'topRated':
                        fetchedMovies = await fetchTopRatedMovies();
                        break;
                    case 'upcoming':
                        fetchedMovies = await fetchUpcomingMovies();
                        break;
                    default:
                        fetchedMovies = await fetchNowPlayingMovies();
                }
                setMovies(fetchedMovies);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            }
        };

        const fetchHeroMovie = async () => {
            try {
                const trendingMovies = await fetchTrendingMovies();
                // Get a random movie from the top 3 trending movies
                const randomIndex = Math.floor(Math.random() * Math.min(3, trendingMovies.length)); // Ensure it's within the array bounds
                setHeroMovie(trendingMovies[randomIndex]);
            } catch (error) {
                console.error('Failed to fetch trending movies:', error);
            }
        };

        fetchMovies();
        fetchHeroMovie();
    }, [category]); // Ensure useEffect runs whenever category changes

    const onCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className="page-home">
            {/* Hero Banner */}
            {heroMovie && (
                <div className="hero-banner">
                    <div className="hero-movie-card" style={{ backgroundImage: `url(${heroMovie.backdropPath})` }}>
                        <div className="movie-card__details">
                            <h2>{heroMovie.title}</h2>
                            <p>{heroMovie.overview}</p>
                            <p>Release Date: {heroMovie.releaseDate}</p>
                            <p>Rating: {heroMovie.rating}</p>
                            <p>Genres: {heroMovie.genres.join(', ')}</p>
                            <a href={`/movie/${heroMovie.id}`}>More Info</a>
                        </div>
                    </div>
                </div>
            )}

            <CategoryButtons selectedCategory={category} onCategoryChange={onCategoryChange} />
            <div className="movie-grid">
                {movies.slice(0, visibleMoviesCount).map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        posterPath={movie.posterPath}
                        releaseDate={movie.releaseDate}
                        rating={movie.rating}
                        genres={movie.genres}
                        isFav={isFav(favs, movie.id)}
                        showMoreInfoLink={true}
                    />
                ))}
            </div>
            {movies.length > visibleMoviesCount && (
                <LoadMoreButton onClick={() => setVisibleMoviesCount(prevCount => prevCount + 20)} />
            )}
        </div>
    );
};

export default PageHome;