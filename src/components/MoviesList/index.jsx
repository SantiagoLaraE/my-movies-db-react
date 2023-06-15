import React from "react";
import MovieCard from "@components/MovieCard";
import "./MoviesList.scss";
import { MovieCardLoading } from "../MovieCard";

const MoviesList = ({ movies, scroll, loading }) => {
  const loadingArr = ["", "", ""];

  return (
    <article className={`MoviesList__list${scroll ? "--scroll" : ""}`}>
      {movies?.length && !loading && <Results movies={movies} />}
      {!movies?.length && !loading && <NoResults />}
      {loading &&
        loadingArr.map((_, i) => (
          <MovieCardLoading key={`MovieCardLoading-${i}`} />
        ))}
    </article>
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
