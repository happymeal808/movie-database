import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import FavButton from './FavButton';

function MovieCard({ movieObj, id, title, overview, posterPath, releaseDate, rating, genres, isFav }) {
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav) {
      dispatch(addFav(obj));
    } else {
      dispatch(deleteFav(obj));
    }
  }

  return (
    <div className="movie-card">
      <img src={posterPath} alt={`${title} poster`} className="movie-card__poster" />
      <div className="movie-card__details">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__release-date">{releaseDate}</p>
        <p className="movie-card__rating">Rating: {rating}/10</p>
        <p className="movie-card__genres">Genres: {genres.join(', ')}</p>
        <p className="movie-card__overview">{overview}</p>
        <p>{isFav ? 'Favorite' : 'Not Favorite'}</p>
        <Link to={`/movie/${id}`} className="movie-card__link">More Info</Link>
      </div>
      <div className="btn-favourite">
        <FavButton
          movieObj={{ id, title, overview, posterPath, releaseDate, rating, genres }}
          remove={isFav}
          handleFavClick={handleFavClick}
        />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default MovieCard;