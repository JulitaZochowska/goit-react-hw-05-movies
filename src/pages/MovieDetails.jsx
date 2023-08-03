import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from 'api/tmdb-api';
import { useEffect, useState, Suspense } from 'react';
import styles from './MovieDetails.module.css';

const DEFAULT_POSTER_PATH =
  'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Light-With-Image.jpg?x81279';

const DEFAULT_MOVIE = {
  id: 'none',
  title: 'none',
  overview: 'none',
  genres: [
    {
      id: 'none',
      name: 'none',
    },
  ],
  poster_path: null,
  vote_average: 0,
};

export const MovieDetails = () => {
  const [movie, setMovie] = useState(DEFAULT_MOVIE);
  const params = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchData() {
      const selectedMovie = await getMovieDetails(params.movieId);
      setMovie(selectedMovie ? selectedMovie : DEFAULT_MOVIE);
    }
    fetchData();
  }, [params]);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <div className={styles.movieContainer}>
        <div>
          <img
            src={
              movie.poster_path
                ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path
                : DEFAULT_POSTER_PATH
            }
            alt={movie.title}
            width={300}
          />
        </div>
        <div className={styles.movieDetails}>
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>
      <hr />

      <div>
        Additional Information
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
