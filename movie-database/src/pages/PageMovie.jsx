import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { apiKey } from '../globals/globalVariables';
import MovieCard from '../components/MovieCard';
import { addFav } from '../features/favs/favsSlice';
import '../scss/styles.scss';
import isFav from '../utils/isFav';

const PageMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const favs = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-movie">
      {movie && (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Corrected prop name
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          genres={movie.genres.map(genre => genre.name)}
          isFav={isFav(favs, null, movie.id)}
          addFav={dispatch(addFav)}
          showMoreInfoLink={false}
        />
      )}
    </div>
  );
};

export default PageMovie;