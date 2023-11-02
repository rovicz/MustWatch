import React from "react";

const GetMovie = () => {
  const useFetch = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=64ad570da067d64c452016d749b28aca"
    )
      .then((r) => r.json())
      .then((json) => console.log(json.results));
  };

  React.useEffect(() => {
    useFetch();
  }, []);

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default GetMovie;
