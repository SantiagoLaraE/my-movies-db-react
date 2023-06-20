import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import Button from "@components/Button";
import MoviesList from "@components/MoviesList";
import useApiInfiniteScrolling from "../hooks/useApiInfiniteScrolling";
import { ArrowLeftIcon } from "@icons";

const GenericMoviesPage = () => {
  let { moviesType } = useParams();
  moviesType = moviesType.replaceAll("-", "_");
  const title = moviesType.replaceAll("_", " ");
  const navigate = useNavigate();
  const {
    data: moviesData,
    loading: moviesLoading,
    end,
  } = useApiInfiniteScrolling({
    endpoint: `/movie/${moviesType}`,
    resetDependecies: [moviesType],
  });

  const goBack = () => {
    const state = location.state;

    if (state?.prevLocation) {
      navigate(state.prevLocation.pathname);
    } else {
      navigate("/");
    }
  };
  return (
    <SectionLayout>
      <SectionLayoutHeader title={title}>
        <Button icon={<ArrowLeftIcon />} title="Go back" onClick={goBack} />
      </SectionLayoutHeader>
      <MoviesList movies={moviesData} />
      <p style={{ width: "100%", padding: "64px", textAlign: "center" }}>
        {moviesLoading && "Loading..."}
        {end && "No more results"}
      </p>
    </SectionLayout>
  );
};

export default GenericMoviesPage;
