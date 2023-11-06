import React from "react";
import { Link } from "react-router-dom";

const movieIMG = import.meta.env.VITE_IMG;

const MovieCard = () => {
  return (
    <div className="movie-card">
      <img src={movieIMG} alt="" />
    </div>
  );
};

export default MovieCard;
