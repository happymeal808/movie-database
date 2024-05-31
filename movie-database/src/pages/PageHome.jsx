import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadMoreButton from '../components/LoadMoreButton';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../api';
import '../scss/styles.scss';
import isFav from '../utils/isFav';

const PageHome = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('nowPlaying');
    const [visibleMoviesCount, setVisibleMoviesCount] = useState(20); // Initially load 20 movies
    const favs = useSelector((state) => state.favs.items);

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
        fetchMovies();
    }, [category]); // Ensure useEffect runs whenever category changes

    const handleLoadMore = () => {
        setVisibleMoviesCount((prevCount) => {
            const newCount = prevCount + 20; // Load additional 20 movies
            return newCount > 80 ? 80 : newCount; // Limit to a maximum of 80 movies
        });
    };

    const onCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className="page-home">
            <div className="category-buttons">
                <button
                    onClick={() => onCategoryChange('nowPlaying')}
                    className={category === 'nowPlaying' ? 'selected' : ''}
                >
                    Now Playing
                </button>
                <button
                    onClick={() => onCategoryChange('popular')}
                    className={category === 'popular' ? 'selected' : ''}
                >
                    Popular
                </button>
                <button
                    onClick={() => onCategoryChange('topRated')}
                    className={category === 'topRated' ? 'selected' : ''}
                >
                    Top Rated
                </button>
                <button
                    onClick={() => onCategoryChange('upcoming')}
                    className={category === 'upcoming' ? 'selected' : ''}
                >
                    Upcoming
                </button>
            </div>
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
            <div>
                {movies.length > visibleMoviesCount && (
                    <LoadMoreButton onClick={handleLoadMore} />
                )}
            </div>
        </div>
    );
};

export default PageHome;