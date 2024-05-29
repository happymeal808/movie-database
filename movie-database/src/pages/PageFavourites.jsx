import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { appTitle } from '../globals/globalVariables';
import isFav from '../utils/isFav'; // Import the isFav utility function

function PageFavourites() {
  const favs = useSelector((state) => state.favs.items);

  useEffect(() => {
    document.title = `${appTitle} - Favs`;
  }, []);

  return (
    <main>
      <section>
        <h2>Favourite Movies</h2>
        {favs.length < 1 ? (
          <p>
            No favourite movies. Return to the <Link to="/">home</Link> page to add some favourite movies!
          </p>
        ) : (
          <div className="page-favourites">
            <div className="movie-grid">
              {favs.map((singleMovieCard, i) => (
                <MovieCard
                  key={i}
                  id={singleMovieCard.id}
                  title={singleMovieCard.title}
                  overview={singleMovieCard.overview}
                  posterPath={singleMovieCard.posterPath}
                  releaseDate={singleMovieCard.releaseDate}
                  rating={singleMovieCard.rating}
                  genres={singleMovieCard.genres}
                  isFav={isFav(favs, '/favs', singleMovieCard.id)} // Use the isFav function
                  showMoreInfoLink={true}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default PageFavourites;