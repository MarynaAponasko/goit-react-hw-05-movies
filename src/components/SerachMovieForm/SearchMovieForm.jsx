import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './SearchMovieForm.module.css';

const SearchMovieForm = ({ initialState, onSubmit }) => {
  const [search, setSearch] = useState(`${initialState}`);

  const handleChangeState = ({ currentTarget }) => {
    setSearch(currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ search });
  };

  //   resetSearch = () => {
  //     this.setState({ search: '' });
  //   };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="search"
        value={search}
        onChange={handleChangeState}
        required
      />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default SearchMovieForm;

SearchMovieForm.defaultProps = {
  initialState: {
    search: '',
  },
};

SearchMovieForm.propsTypes = {
  initialState: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
