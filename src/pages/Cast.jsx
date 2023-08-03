import { getCast } from 'api/tmdb-api';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      setCast(await getCast(params.movieId));
    }
    fetchData();
  }, [params]);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={'https://image.tmdb.org/t/p/w300' + actor.profile_path}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
