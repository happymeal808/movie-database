import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../api';
import '../scss/styles.scss';

const PageHome = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('nowPlaying');
  
    useEffect(() => {
      const fetchMovies = async () => {
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
      };
      fetchMovies();
    }, [category]);
  
    return (
      <div className="page-home">
        <h1>Welcome to the Movie Database</h1>
        <div className="category-buttons">
          <button onClick={() => setCategory('nowPlaying')}>Now Playing</button>
          <button onClick={() => setCategory('popular')}>Popular</button>
          <button onClick={() => setCategory('topRated')}>Top Rated</button>
          <button onClick={() => setCategory('upcoming')}>Upcoming</button>
        </div>
        <div className="movie-grid">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={movie.posterPath}
              releaseDate={movie.releaseDate}
              rating={movie.rating}
              genres={movie.genres}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PageHome;