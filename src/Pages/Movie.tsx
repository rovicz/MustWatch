import MovieInfo from "../Components/MovieInfo";
import { IMovies } from "./Home";

const Movie = (movie?: IMovies) => {
  if (!movie) return null;
  return (
    <div className="container movie-desc">
      <MovieInfo key={movie.id} {...movie} />
    </div>
  );
};

export default Movie;
