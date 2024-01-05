import MovieInfo from "./MovieInfo";

const MovieCard = (movie?: IMovies) => {
  if (!movie) return null;
  return (
    <div className="movie-card">
      <MovieInfo {...movie} />
    </div>
  );
};

export default MovieCard;
