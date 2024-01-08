import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import imdb_logo from "../assets/imdb-logo.svg";
import { RiTimeFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import NoMoviePoster from "../assets/NoMoviePoster.jpg";

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

    if (hours == 0 && minutes == 0) {
      return "Not informed.";
    }

    return `${hours}h${minutes}m`;
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
  const imgFinal = movieIMG + movie.poster_path;
  return (
    <div className="container">
      <div>
        <div className="movie-info">
          {imgFinal.includes("null") ? (
            <img src={NoMoviePoster} alt="No Movie Poster." />
          ) : (
            <img src={imgFinal} alt={movie.title} />
          )}
          <div className="movie-desc">
            <h2 className="movie-title">{movie.title}</h2>
            {movie.tagline !== "" ? (
              <p className="tagline">{movie.tagline}</p>
            ) : (
              <p className="tagline">
                This movie doesn't have an informed tagline.
              </p>
            )}

            <p className="budget">
              <GiPayMoney /> Budget:{" "}
              {movie.budget > 0
                ? movie.budget.toLocaleString("us", {
                    style: "currency",
                    currency: "USD",
                  })
                : "Not Informed."}
            </p>

            <p className="revenue">
              <GiReceiveMoney /> Revenue:{" "}
              {movie.revenue > 0
                ? movie.revenue.toLocaleString("us", {
                    style: "currency",
                    currency: "USD",
                  })
                : "Not Informed."}
            </p>

            <p className="runtime">
              <RiTimeFill />
              {timeCoverter(movie.runtime)}
            </p>

            <p className="release-date">
              <MdOutlineDateRange /> {getMovieReleaseDate(movie.release_date)}
            </p>

            <p className="vote-average">
              <FaStar />{" "}
              {movie.vote_average > 0
                ? movie.vote_average.toFixed(2)
                : "Not informed."}
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
