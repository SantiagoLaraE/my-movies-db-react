import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { StarIcon } from "../../assets/Icons";
import "./HeroMovie.scss";
import CategoryList from "../CategoryList";

export const HeroMovie = ({ children, spacingTop }) => {
  return (
    <section className={`HeroMovie ${spacingTop ? "spacingTop" : ""}`}>
      <div className="HeroMovie__wrapper container">
        {/*buttonBack
        {/* <HeroMoviePoster />
        <HeroMovieDetailsWrapper /> */}
        {children}
      </div>
    </section>
  );
};

export const HeroMovieBackground = ({ imgBgMobile, imgBgDesktop }) => {
  return (
    <section className="HeroMovieBackground">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={imgBgDesktop}
          // srcset="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg"
        />
        <img
          src={imgBgMobile}
          // src="https://image.tmdb.org/t/p/w500//fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
          alt=""
        />
      </picture>
    </section>
  );
};

export const HeroMoviePoster = ({ imgUrl, imgAlt, loading }) => {
  return (
    <div className="HeroMoviePoster">
      {loading && <div className="movie-poster-loading--img"></div>}
      {!loading && <img src={imgUrl} alt={imgAlt} />}
    </div>
  );
};

export const HeroMovieDetailsWrapper = ({ children }) => {
  return (
    <div className="HeroMovieDetailsWrapper">
      {/* <HeroMovieDetails />
      <HeroMovieCategories /> */}
      {children}
    </div>
  );
};

export const HeroMovieDetails = ({ loading, children }) => {
  return (
    <div className="HeroMovieDetails">
      {/*<HeroMovieInfo />
      <HeroMovieDescription />
      <HeroMovieActions /> */}
      {loading && <LoadingSpinner />}
      {!loading && children}
    </div>
  );
};

export const HeroMovieInfo = ({ voteAverage, runtime, tag }) => {
  return (
    <div className="HeroMovieInfo">
      <div className="HeroMovieInfo__vote-average">
        <StarIcon /> {voteAverage}
      </div>
      <div className="HeroMovieInfo__runtime">{runtime}</div>
      {tag && <div className="HeroMovieInfo__tag">{tag}</div>}
    </div>
  );
};

export const HeroMovieDescription = ({ title, overview }) => {
  return (
    <div className="HeroMovieDescription">
      <h1 className="HeroMovieDescription__title">{title}</h1>
      <p className="HeroMovieDescription__overview">{overview}</p>
    </div>
  );
};

export const HeroMovieActions = ({ children }) => {
  return <div className="HeroMovieActions">{children}</div>;
};

export const HeroMovieCategories = ({ categories, loading }) => {
  return (
    <article className="HeroMovieCategories">
      <div className="HeroMovieCategories__header">
        <h2 className="HeroMovieCategories__title">Categories</h2>
      </div>
      <CategoryList categories={categories} loading={loading} />
    </article>
  );
};
