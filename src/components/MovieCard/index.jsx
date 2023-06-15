import React from "react";
import Button from '@components/Button';
import './MovieCard.scss';

const MovieCard = () => {
  return (
    <figure className="MovieCard">
      <img
        className="MovieCard__img MovieCard__img--loaded"
        data-image="https://image.tmdb.org/t/p/w154/w46Vw536HwNnEzOa7J24YH9DPRS.jpg"
        alt="My Fault"
        width="200"
        height="300"
        src="https://image.tmdb.org/t/p/w154/w46Vw536HwNnEzOa7J24YH9DPRS.jpg"
      />
      <figcaption className="MovieCard__title">My Fault</figcaption>
        <Button icon='🤍' className='MovieCard__btn' variant='secondary' size='small'/>
    </figure>
  );
};

export default MovieCard;
