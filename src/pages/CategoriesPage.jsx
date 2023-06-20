import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Button from "@components/Button";
import MoviesList from "@components/MoviesList";
import { ArrowLeftIcon } from "@icons";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import CategoryList from "../components/CategoryList";
import useApi from "@hooks/useApi";
import useApiInfiniteScrolling from "../hooks/useApiInfiniteScrolling";

const CategoriesPage = () => {

  const { categorySlug } = useParams();
  const [categoryId, categoryName] = categorySlug.split("&");
  const navigate = useNavigate();
  const location = useLocation();

  const { data, loading: loadingCategories } = useApi({
    endpoint: "/genre/movie/list",
  });

  const categories = data?.genres;

  const {data: moviesData, loading: moviesLoading, end} = useApiInfiniteScrolling({
    endpoint: "/discover/movie",
    qParams: [`with_genres=${categoryId}`],
    resetDependecies: [categorySlug],
  })

  const goBack = () => {
    const state = location.state;

    if (state?.prevLocation) {
      navigate(state.prevLocation.pathname);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <SectionLayout>
        <SectionLayoutHeader title={categoryName}>
          <Button icon={<ArrowLeftIcon />} title="Go back" onClick={goBack} />
        </SectionLayoutHeader>
        <CategoryList
          categories={categories}
          loading={loadingCategories}
          activeCategory={categoryId}
        />
        <MoviesList movies={moviesData} />
        <p style={{ width: "100%", padding: "64px", textAlign: "center" }}>
          {moviesLoading && 'Loading...' }
          {end && 'No more results'}
        </p>
      </SectionLayout>
    </>
  );
};

export default CategoriesPage;
