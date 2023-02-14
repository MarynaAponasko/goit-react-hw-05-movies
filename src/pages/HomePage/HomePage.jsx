import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingList();
  });

  const fetchTrendingList = async () => {
    await fetchTrendingMovies()
      .then(({ data: { results } }) => setMovies(results))
      .catch();
  };

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
