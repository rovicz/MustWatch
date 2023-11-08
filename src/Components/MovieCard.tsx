import { Link } from "react-router-dom";
import { IMovies } from "../Pages/Home";

const movieIMG = import.meta.env.VITE_IMG;

const MovieCard = (movie: IMovies) => {
  return (
    <div className="movie-card">
      <img src={movieIMG + movie.poster_path} alt={movie.title} />
      <h2>Title: {movie.title}</h2>
      <p>Vote: {movie.vote_average}</p>
      <Link to={`/movie/${movie.id}`}>Details</Link>
    </div>
  );
};

export default MovieCard;
