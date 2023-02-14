import axios from 'axios';

const KEY = '9225d40049583defe43ffc34168e4f8c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
  return axios('/trending/movie/day', {
    params: {
      api_key: KEY,
      page: 1,
    },
  });
};

export const fetchMoviesBySearch = query => {
  return axios('/search/movie', {
    params: {
      api_key: KEY,
      page: 1,
      language: 'en-US',
      include_adult: false,
      query,
    },
  });
};
export const fetchMoviesById = id => {
  return axios(`/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
};

export const fetchMoviesActors = id => {
  return axios(`/movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
};
export const fetchMoviesReviews = id => {
  return axios(`/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
};
