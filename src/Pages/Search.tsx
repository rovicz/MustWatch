import React from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchedMovies, setSearchedMovies] = React.useState<IMovies[] | null>(
    [],
  );
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const getSearchedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setSearchedMovies(data.results);
  };

  React.useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  if (!searchedMovies) return null;
  return (
    <div className="container movies">
      <div className="title t-search">
        <h2>
          You searched for: <span>{query}</span>
        </h2>
      </div>
      <div className="movies-box">
        {searchedMovies.length === 0 && <p className="loading">Loading...</p>}
        {searchedMovies.length > 0 &&
          searchedMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
    </div>
  );
};

export default Search;
