import React from "react";

const GetMovie = () => {
  const [movieList, setMovieList] = React.useState([]);

  const useFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=64ad570da067d64c452016d749b28aca"
    )
      .then((r) => r.json())
      .then((json) => setMovieList(json.results));
  };

  React.useEffect(() => {
    useFetch();
  }, []);

  console.log(movieList);

  return (
    <div>
      <ul>
        {movieList.map((movie) => (
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        ))}
      </ul>
    </div>
  );
};

export default GetMovie;
