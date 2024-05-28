import React, { useState, useEffect } from 'react';
import './scss/styles.scss';
import Header from './components/Header';
import { fetchPopularMovies } from './api';
import { appTitle, imageBaseURL } from './globals/globalVariables';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <div className="wrapper">
      <Header title={appTitle} />
      <div className="movies">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie">
              <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
}

export default App;