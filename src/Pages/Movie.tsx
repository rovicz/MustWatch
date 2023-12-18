import { useParams } from "react-router-dom";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import imdb_logo from "../assets/imdb-logo.svg";
import { RiTimeFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";

type MovieInfos = {
  title: string;
  overview: string;
  tagline: string;
  vote_average: number;
  poster_path: string;
  budget: number;
  revenue: number;
  runtime: number;
  imdb_id: string;
  release_date: string;
};

const movieIMG = import.meta.env.VITE_IMG;
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imdb = import.meta.env.VITE_IMDB_SEARCH;

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

  function timeCoverter(num: number) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h:${minutes}m`;
  }

  function getMovieReleaseDate(date: string) {
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const convertDate = new Date(date);
    const yearDate = convertDate.getFullYear();

    if (!yearDate) {
      return "To be announced.";
    } else if (yearDate > actualYear) {
      return `${yearDate}: Not yet released.`;
    }

    return yearDate;
  }

  if (!movie) return null;

  return (
    <div className="container">
      <div>
        <div className=" movie-info">
          <img src={movieIMG + movie.poster_path} alt={movie.title} />
          <div className="movie-desc">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="tagline">{movie.tagline}</p>
            <p className="budget">
              <GiPayMoney /> Budget:{" "}
              {movie.budget.toLocaleString("us", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p className="revenue">
              <GiReceiveMoney /> Revenue:{" "}
              {movie.revenue.toLocaleString("us", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p className="runtime">
              <RiTimeFill /> {timeCoverter(movie.runtime)}
            </p>
            <p className="vote-average">
              <FaStar /> {movie.vote_average.toFixed(2)}
            </p>

            <p className="release-date">
              <MdOutlineDateRange /> {getMovieReleaseDate(movie.release_date)}
            </p>

            <p className="overview-title">Overview:</p>
            <p className="overview"> {movie.overview}</p>

            <div className="imdb-button">
              <p>Get the experts' opinions:</p>
              <a target="blank" href={imdb + movie.imdb_id}>
                <img src={imdb_logo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
