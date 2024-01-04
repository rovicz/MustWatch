import React from "react";
import MovieCard from "../Components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export type IMovies = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
};

const Home = () => {
  const [bestMovies, setBestMovies] = React.useState<IMovies[] | null>([]);

  const getBestMovies = async (url: string) => {
    const r = await fetch(url);
    if (r.ok) {
      const data = await r.json();
      setBestMovies(data.results);
    } else if (r.status === 404) {
      return Promise.reject("Error 404.");
    } else {
      return Promise.reject("other error:" + r.status);
    }
  };

  React.useEffect(() => {
    const bestMoviesURL = `${moviesURL}top_rated?${apiKey}`;
    getBestMovies(bestMoviesURL);
  }, []);

  if (!bestMovies) return null;
  return (
    <div className="container movies">
      <div className="title">
        <h2>The Twenty</h2>
        <p>The 20 highest rated films on the internet you must watch.</p>
      </div>
      <div className="movies-box">
        {bestMovies.length === 0 && <p className="loading">Loading...</p>}
        {bestMovies.length > 0 &&
          bestMovies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default Home;
