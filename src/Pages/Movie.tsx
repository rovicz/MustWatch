import { useParams } from "react-router-dom";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";

type MovieInfos = {
  title: string;
  overview: string;
  tagline: string;
  vote_average: number;
  poster_path: string;
  budget: number;
};

const movieIMG = import.meta.env.VITE_IMG;
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState<MovieInfos | null>(null);

  const getMovie = async (url: string) => {
    const r = await fetch(url);
    const data = await r.json();

    setMovie(data);
  };

  React.useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, [id]);

  if (!movie) return null;
  return (
    <div className="container movie-desc">
      <div>
        <h2 className="title movie-title">{movie.title}</h2>
        <div className="movieinfo-box movie-info">
          <img src={movieIMG + movie.poster_path} alt={movie.title} />
          <p className="tagline">{movie.tagline}</p>
          <p className="budget">
            <GiPriceTag /> Budget:{" "}
            {movie.budget.toLocaleString("us", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="vote-average">
            <FaStar /> {movie.vote_average}
          </p>

          <p className="overview-title">Overview:</p>
          <p className="overview"> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
