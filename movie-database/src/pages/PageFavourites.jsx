import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { appTitle } from '../globals/globalVariables';
import isFav from '../utils/isFav';

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
            <svg className='sad-face' aria-label='sad face' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.019 14c1.842.005 3.613.791 5.117 2.224l-.663.748c-1.323-1.27-2.866-1.968-4.456-1.972h-.013c-1.568 0-3.092.677-4.4 1.914l-.664-.748c1.491-1.4 3.243-2.166 5.064-2.166h.015zm-3.494-6.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>
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