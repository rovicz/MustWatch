import React from "react";
import useFetch from "../Hooks/useFetch";
import { IMovies, useData } from "../Context/DataContext";

const GetMovie = () => {
  const { data } = useFetch<IMovies>(
    "https://api.themoviedb.org/3/discover/movie?api_key=64ad570da067d64c452016d749b28aca"
  );

  if (data === null) return null;
  return <div></div>;
};

export default GetMovie;
