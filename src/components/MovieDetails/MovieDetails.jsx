import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailsApi } from "../../utils/fetchApi";

async function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetailsApi(id).then((res) => {
      setMovie(res);
    });
  }, [id]);

  return (
    <div>
      <div>
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
}

export default MovieDetails;
