import React from "react";
import { useParams } from "react-router-dom";
import MoviesList from "@components/MoviesList";
import useApiInfiniteScrolling from "../hooks/useApiInfiniteScrolling";

const MoviesByCategory = () => {
  const { categorySlug } = useParams();
  const [categoryId, _] = categorySlug.split("&");

  const {
    data: moviesData,
    loading: moviesLoading,
    end,
  } = useApiInfiniteScrolling({
    endpoint: "/discover/movie",
    qParams: [`with_genres=${categoryId}`],
    resetDependecies: [categorySlug],
  });

  
  return (
    <>
      <MoviesList movies={moviesData} />
      <p style={{ width: "100%", padding: "64px", textAlign: "center" }}>
        {moviesLoading && "Loading..."}
        {end && "No more results"}
      </p>
    </>
  );
};

export default MoviesByCategory;
