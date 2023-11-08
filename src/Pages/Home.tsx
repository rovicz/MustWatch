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
    const data = await r.json();

    setBestMovies(data.results);
  };

  React.useEffect(() => {
    const bestMoviesURL = `${moviesURL}top_rated?${apiKey}`;
    getBestMovies(bestMoviesURL);
    console.log(getBestMovies(bestMoviesURL));
  }, []);

  if (!bestMovies) return null;
  return (
    <div className="container movies">
      <h2>Best Movies:</h2>
      <div className="movies-box">
        {bestMovies.length === 0 && <p>Loading...</p>}
        {bestMovies.length > 0 &&
          bestMovies.map((movie) => (
            <div key={movie.id}>
              <MovieCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;