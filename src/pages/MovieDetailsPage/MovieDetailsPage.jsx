import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchDetailsInfo = async () => {
      try {
        const { data } = await fetchMoviesById(id);
        setMovieInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetailsInfo();
  }, [id]);
  const changeGenres = () => {
    if (!movieInfo) {
      return;
    }
    const genres = movieInfo.genres;
    return genres.map(x => x.name).join(', ');
  };

  const changeScore = () => {
    if (!movieInfo) {
      return;
    }
    return ((movieInfo.vote_average * 100) / 100).toFixed(2);
  };
  const createYear = () => {
    if (!movieInfo) {
      return;
    }
    return movieInfo.release_date.slice(0, 4);
  };

  return (
    <>
      <button
        type="button"
        className={s.btnGoBack}
        onClick={() => navigate(from)}
      >
        Go back
      </button>
      <div className={s.mainContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieInfo?.poster_path}`}
          alt={movieInfo?.title}
          width="250"
        />
        <div>
          <h3 className={s.title}>
            {movieInfo?.title} ({createYear()})
          </h3>
          <p className={s.text}>User Score: {changeScore()}%</p>
          <h4 className={s.secondTitle}>Overview</h4>
          <p className={s.text}>{movieInfo?.overview}</p>
          <h4 className={s.secondTitle}>Genres </h4>
          <p className={s.text}> {changeGenres()} </p>
        </div>
      </div>

      <ul>
        Additional information
        <li>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from }}>
            Reviews{' '}
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
