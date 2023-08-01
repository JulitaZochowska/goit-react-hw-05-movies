import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const CommonLayout = () => {
  return (
    <div className='="container'>
      <header className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/cast">Cast</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
      </header>
      {/* //Lazy loading */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
