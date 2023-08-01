import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './components/CommonLayout';

const Home = lazy(() => import('./pages/Home')); //zaladuj Home jako lazy loading, nie ma być odrazu wstrzykiwany, tylko jak na niego wejdziemy
const Movies = lazy(() => import('./pages/Movies '));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="movies/:movieId/cast" element={<MovieDetails />} />
          <Route path="movies/:movieId/reviews" element={<MovieDetails />} />
          React homework template
        </Route>
      </Routes>
    </div>
  );
};
