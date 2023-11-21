import { IMovies } from "../Pages/Home";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const movieIMG = import.meta.env.VITE_IMG;

const MovieInfo = (movie?: IMovies) => {
  if (!movie) return null;
  return (
    <div className="movieinfo-box">
      <img src={movieIMG + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average.toFixed(2)}
      </p>
      <Link to={`/movie/${movie.id}`}>Details</Link>
    </div>
  );
};

export default MovieInfo;
