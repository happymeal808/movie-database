import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import FavButton from './FavButton';

function BannerMovies({ id, title, overview, posterPath, releaseDate, rating, genres, isFav, showMoreInfoLink }) {
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
        {showMoreInfoLink && <Link to={`/movie/${id}`} className="movie-card__link">More Info</Link>}
        <div className="btn-favourite">
        <FavButton
          movieObj={{ id, title, overview, posterPath, releaseDate, rating, genres }}
          remove={isFav}
          handleFavClick={handleFavClick}
        />
      </div>
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
  isFav: PropTypes.bool,
  showMoreInfoLink: PropTypes.bool, // Prop to conditionally render "More Info" link
};

export default BannerMovies;