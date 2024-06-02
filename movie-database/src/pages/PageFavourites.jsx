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
        
        {favs.length < 1 ? (
          <div className='page-no-favourites'>
            <h2 className='favourites-header'>Favourites</h2>
            <h3>Uh oh!</h3>
            <p>You currently don't have any movies in your favourite list! Check back in once you have selected the heart icon on you favourite flicks over <Link to="/">here</Link>!</p>
          </div>
        ) : (
          <div className="page-favourites">
            <h2 className='favourites-header'>Favourites</h2>
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
                  currentPage="PageFavourites" // Pass the currentPage prop
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