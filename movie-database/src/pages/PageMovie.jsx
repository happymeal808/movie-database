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
  const [trailerKey, setTrailerKey] = useState(null);
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

    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`);
        const data = await response.json();
        const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error('Error fetching movie trailer:', error);
      }
    };

    fetchMovieDetails();
    fetchMovieTrailer();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-movie">
      {movie && (
        <React.Fragment>
          <div className="movie-backdrop">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={`${movie.title} backdrop`} />
          </div>
          <div className="movie-card-container">
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              genres={movie.genres.map(genre => genre.name)}
              isFav={isFav(favs, null, movie.id)}
              addFav={() => dispatch(addFav(movie))}
              showMoreInfoLink={false}
            />
          </div>
          {trailerKey && (
            <div className="movie-trailer">
              <h2>Trailer</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default PageMovie;