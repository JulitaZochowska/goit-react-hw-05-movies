import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './CommonLayout.styled';

export const CommonLayout = () => {
  return (
    <div className="container">
      <Header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Header>
      {/* //Lazy loading */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
