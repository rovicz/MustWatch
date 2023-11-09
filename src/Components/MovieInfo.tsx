import { IMovies } from "../Pages/Home";
import { FaStar } from "react-icons/fa";

const movieIMG = import.meta.env.VITE_IMG;

const MovieInfo = (movie?: IMovies) => {
  if (!movie) return null;
  return (
    <div>
      <img src={movieIMG + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
    </div>
  );
};

export default MovieInfo;
