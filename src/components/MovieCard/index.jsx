import React from "react";
import Button from "@components/Button";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  let poster_path = `https://image.tmdb.org/t/p/w154/${movie.poster_path}`;

  if (movie.poster_path === null) {
    poster_path = `https://via.placeholder.com/200x300/191919/ffffff?text=${encodeURI(
      movie.title
    )}`;
  }

  return (
    <figure className="MovieCard">
      <img
        className="MovieCard__img MovieCard__img--loaded"
        data-image={poster_path}
        alt="My Fault"
        width="200"
        height="300"
        src={poster_path}
      />
      <figcaption className="MovieCard__title">{movie.title}</figcaption>
      <Button
        icon="🤍"
        className="MovieCard__btn"
        variant="secondary"
        size="small"
      />
    </figure>
  );
};

export const MovieCardLoading = () => {
  return (
    <div>
      <div className="img-loading"></div>
      <div className="text-loading"></div>
    </div>
  );
};

export default MovieCard;
