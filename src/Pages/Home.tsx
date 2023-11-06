import React from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const movieIMG = import.meta.env.VITE_IMG;

type IMovies = {
  id: number;
  title: string;
  vote_count: number;
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
    <div className="container">
      <h2>Best Movies:</h2>
      <div className="movies-box">
        {bestMovies.length === 0 && <p>Loading...</p>}
        {bestMovies.length > 0 &&
          bestMovies.map((movie) => (
            <ul key={movie.id}>
              <li>
                <img src={movieIMG + movie.poster_path} alt={movie.title} />
              </li>
              <li>
                <p>Title: {movie.title}</p>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Home;
