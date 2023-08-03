import { getReviews } from 'api/tmdb-api';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      setReviews(await getReviews(params.movieId));
    }
    fetchData();
  }, [params]);

  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
