import { apiKey, imageBaseURL, nowPlaying, popular, topRated, upcoming } from './globals/globalVariables';

const fetchMovies = async (url) => {
  try {
    const response = await fetch(`${url}&api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Full URL to the poster image
      releaseDate: movie.release_date,
      rating: movie.vote_average,
      genres: movie.genre_ids.map(genreId => genreIdToName(genreId)) // Convert genre IDs to names
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const genreIdToName = (id) => {
  const genres = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };
  return genres[id] || 'Unknown';
};

export const fetchNowPlayingMovies = () => fetchMovies(nowPlaying);
export const fetchPopularMovies = () => fetchMovies(popular);
export const fetchTopRatedMovies = () => fetchMovies(topRated);
export const fetchUpcomingMovies = () => fetchMovies(upcoming);