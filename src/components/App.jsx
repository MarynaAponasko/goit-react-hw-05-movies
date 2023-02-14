import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import s from './app.module.css';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('../pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <>
      <nav className={s.navMenu}>
        <NavLink className={s.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={s.navLink} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>

          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
