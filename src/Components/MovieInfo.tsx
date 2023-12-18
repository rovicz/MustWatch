import { IMovies } from "../Pages/Home";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoMoviePoster from "../assets/NoMoviePoster.jpg";

const movieIMG = import.meta.env.VITE_IMG;

const MovieInfo = (movie?: IMovies) => {
  if (!movie) return null;
  const imgFinal = movieIMG + movie.poster_path;

  return (
    <div className="movieinfo-box">
      {imgFinal.includes("null") ? (
        <img src={NoMoviePoster} alt="No Movie Poster." />
      ) : (
        <img src={imgFinal} alt={movie.title} />
      )}
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
