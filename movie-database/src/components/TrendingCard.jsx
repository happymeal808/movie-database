import React from 'react';

const TrendingCard = ({ id, title, overview, posterPath, releaseDate, rating, genres, isFav, showMoreInfoLink, backdropPath }) => {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterPath} alt={title} />
            </div>
            <div className="movie-details">
                <h2>{title}</h2>
                <p>{overview}</p>
                <p>Release Date: {releaseDate}</p>
                <p>Rating: {rating}</p>
                <p>Genres: {genres.join(', ')}</p>
                {showMoreInfoLink && <a href={`/movie/${id}`}>More Info</a>}
            </div>
            {isFav && <div className="fav-star">Favorite</div>}
            {backdropPath && (
                <div className="movie-backdrop">
                    <img src={backdropPath} alt={`${title} Backdrop`} />
                </div>
            )}
        </div>
    );
};

export default TrendingCard;