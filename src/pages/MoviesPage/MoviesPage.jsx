import { useState, useEffect } from 'react';
import SearchMovieForm from 'components/SerachMovieForm/SearchMovieForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMoviesBySearch } from 'services/api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  // const [search, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchSearchingList = async () => {
      try {
        const {
          data: { results },
        } = await fetchMoviesBySearch(search);
        // console.log(results);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSearchingList();
  }, [search]);
  const handlerSubmit = ({ search }) => {
    setSearchParams({ search });
  };
  const setInitialState = () => {
    if (!search) {
      return '';
    }
    return search;
  };

  return (
    <>
      <SearchMovieForm
        initialState={setInitialState()}
        onSubmit={handlerSubmit}
      />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;
