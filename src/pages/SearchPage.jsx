import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import Button from "@components/Button";
import MoviesList from "@components/MoviesList";
import useApiInfiniteScrolling from "../hooks/useApiInfiniteScrolling";
import { ArrowLeftIcon } from "@icons";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const navigate = useNavigate();
  const {
    data: moviesData,
    loading: moviesLoading,
    end,
  } = useApiInfiniteScrolling({
    endpoint: `/search/movie`,
    qParams: [`query=${query}`],
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
      <SectionLayoutHeader title={`Results for: ${query}`}>
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

export default SearchPage;
