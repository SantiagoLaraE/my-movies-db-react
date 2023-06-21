import React from "react";
import useApi from "@hooks/useApi";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import MoviesList from "@components/MoviesList";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

const MoviesTypeSection = ({ title, endpoint, seeAllLink }) => {
  const navigate = useNavigate()
  const { data, loading } = useApi({ endpoint });
  const movies = data?.results;
  return (
    <SectionLayout>
      <SectionLayoutHeader title={title}>
        <Button
          title="See all"
          size="small"
          onClick={() => navigate(seeAllLink)}
        />
      </SectionLayoutHeader>
      <MoviesList movies={movies} loading={loading} xScroll />
    </SectionLayout>
  );
};

export default MoviesTypeSection;
