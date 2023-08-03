import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './components/CommonLayout';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

const Home = lazy(() => import('./pages/Home')); //zaladuj Home jako lazy loading, nie ma być odrazu wstrzykiwany, tylko jak na niego wejdziemy
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Movies = lazy(() => import('./pages/Movies'));

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 20,
    //   color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
