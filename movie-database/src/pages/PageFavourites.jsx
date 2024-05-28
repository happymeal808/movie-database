import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { appTitle } from '../globals/globalVariables';
import { useSelector } from 'react-redux';

function PageFavourites() {

    const favs = useSelector((state) => state.favs.items);

	useEffect(() => {
		document.title = `${appTitle} - Favs`;
	}, []);

    return (
        <main>
		    <section>
                <h2>Favourite Movies</h2>
                {favs.length < 1 ? <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some favourite movies!</p> : 
                    <div className="movie-grid">
                        {favs.map((singleMovieCard, i) => {
                            return <MovieCard key={i} 
                                           movieObj={singleMovieCard}
                                           isFav={true} />
                        })}
				    </div>}
            </section>
	    </main>
    );
	
}


export default PageFavourites;