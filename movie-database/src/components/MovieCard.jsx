import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import FavButton from './FavButton';

function MovieCard({ id, title, overview, posterPath, releaseDate, rating, genres, showMoreInfoLink }) {
  const dispatch = useDispatch();
  const favs = useSelector(state => state.favs.items);
  const isFav = favs.some(movie => movie.id === id);

  function handleFavClick(addToFav, obj) {
    if (addToFav) {
      dispatch(addFav(obj));
    } else {
      dispatch(deleteFav(obj));
    }
  }

  const ratingPercentage = Math.round(rating * 10);

  return (
    <div className="movie-card">
      <img src={posterPath} alt={`${title} poster`} className="movie-card__poster" />
      <div className="movie-card__details">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__release-date">{releaseDate}</p>
        <p className="movie-card__rating">{ratingPercentage}%</p>
        <p className="movie-card__genres">{genres.join(' • ')}</p>
        <p className="movie-card__overview">{overview}</p>
        <div className='interactables'>
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
    </div>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  showMoreInfoLink: PropTypes.bool.isRequired,
};

export default MovieCard;