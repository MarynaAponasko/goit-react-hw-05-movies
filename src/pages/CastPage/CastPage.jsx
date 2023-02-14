import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesActors } from 'services/api';

const CastPage = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchCast = async () => {
      try {
        const {
          data: { cast },
        } = await fetchMoviesActors(id);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <>
      <ul>
        {cast.map(({ name, profile_path, id }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="100"
              />
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CastPage;
