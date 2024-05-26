import { apiKey, nowPlaying, popular, topRated, upcoming } from './globals/globalVariables';

const fetchMovies = async (url) => {
  try {
    const response = await fetch(`${url}&api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const fetchNowPlayingMovies = () => fetchMovies(nowPlaying);
export const fetchPopularMovies = () => fetchMovies(popular);
export const fetchTopRatedMovies = () => fetchMovies(topRated);
export const fetchUpcomingMovies = () => fetchMovies(upcoming);