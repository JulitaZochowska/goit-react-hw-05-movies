import { getTrending } from 'api/tmdb-api';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setTrending(await getTrending());
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trending.map(movie => (
          <li key={movie.id}>
            <Link to={'/movies/' + movie.id}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
