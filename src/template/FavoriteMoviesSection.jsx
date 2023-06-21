import React from "react";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import MoviesList from "@components/MoviesList";
import { useFavoriteMovies } from "@context/favoriteMovies";

const FavoriteMoviesSection = ({ title, xScroll }) => {
  const { favoriteMovies } = useFavoriteMovies();
  return (
    <SectionLayout>
      <SectionLayoutHeader title={title}></SectionLayoutHeader>
      <MoviesList movies={favoriteMovies} loading={false} xScroll={xScroll} />
    </SectionLayout>
  );
};

export default FavoriteMoviesSection;
