import { useParams, Link } from 'react-router-dom';
import { findMovieById } from 'utils';

const DEFAULT_MOVIE = {
  id: 'none',
  name: 'none',
  new: false,
};

export const MovieDetails = () => {
  const params = useParams();
  const movieDetail = params.movieId
    ? findMovieById(params.movieId)
    : DEFAULT_MOVIE;

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <Details
        name={movieDetail.name}
        overview={movieDetail.overview}
        genres={movieDetail.genres}
      />{' '}
    </div>
  );
};
export default MovieDetails;
