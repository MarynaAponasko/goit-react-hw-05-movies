import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/api';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchReviews = async () => {
      try {
        const {
          data: { results },
        } = await fetchMoviesReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any rewiews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ReviewsPage;
