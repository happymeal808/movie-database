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
      setVisibleMoviesCount(prevCount => {
        const newCount = prevCount + 20; // Load additional 20 movies
        return newCount > 80 ? 80 : newCount; // Limit to a maximum of 80 movies
      });
    };
  
    return (
      <div className="page-home">
        <div className="category-buttons">
          <button onClick={() => setCategory('nowPlaying')}>Now Playing</button>
          <button onClick={() => setCategory('popular')}>Popular</button>
          <button onClick={() => setCategory('topRated')}>Top Rated</button>
          <button onClick={() => setCategory('upcoming')}>Upcoming</button>
        </div>
        <div className="movie-grid">
          {movies.slice(0, visibleMoviesCount).map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={movie.posterPath}
              releaseDate={movie.releaseDate}
              rating={movie.rating}
              genres={movie.genres}
              isFav={isFav(favs, null, movie.id)}
              showMoreInfoLink={true}
            />
          ))}
        </div>
        {/* <div>
        {movies.length > visibleMoviesCount && visibleMoviesCount < movies.length && (
          <LoadMoreButton onClick={handleLoadMore} />
        )}
        </div> */}
      </div>
    );
};

export default PageHome;