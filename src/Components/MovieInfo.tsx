import { IMovies } from "../Pages/Home";

const movieIMG = import.meta.env.VITE_IMG;

const MovieInfo = (movie?: IMovies) => {
  if (!movie) return null;
  return (
    <div>
      <img src={movieIMG + movie.poster_path} alt={movie.title} />
      <h2>Title: {movie.title}</h2>
      <p>Vote: {movie.vote_average}</p>
    </div>
  );
};

export default MovieInfo;
