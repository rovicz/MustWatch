import { Link } from "react-router-dom";
import { IMovies } from "../Pages/Home";
import MovieInfo from "./MovieInfo";

const MovieCard = (movie?: IMovies) => {
  if (!movie) return null;
  return (
    <div className="movie-card">
      <MovieInfo {...movie} />
      <Link to={`/movie/${movie.id}`}>Details</Link>
    </div>
  );
};

export default MovieCard;
