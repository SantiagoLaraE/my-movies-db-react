import React from "react";
import Button from "@components/Button";
import MovieCard from "@components/MovieCard";
import "./MoviesList.scss";
import { MovieCardLoading } from "../MovieCard";

const MoviesList = ({ title, movies, scroll, loading }) => {
  const loadingArr = ["", "", ""];

  return (
    <section className="MoviesList trending-movies section">
      <div className="container">
        <div className="MoviesList__header">
          <h2 className="MoviesList__title">{title}</h2>
          <Button title="see all" size="small" />
        </div>
        <article className={`MoviesList__list${scroll ? "--scroll" : ""}`}>
          {movies?.length && !loading && <Results movies={movies} />}
          {!movies?.length && !loading && <NoResults />}
          {loading && loadingArr.map((_, i) => <MovieCardLoading key={`MovieCardLoading-${i}`}/>)}
        </article>
      </div>
    </section>
  );
};

const Results = ({ movies }) => {
  return movies.map((movie) => (
    <MovieCard key={`MovieCard-${movie.id}`} movie={movie} />
  ));
};

const NoResults = () => {
  return <p className="MoviesList__no-results">No results</p>;
};

export default MoviesList;
