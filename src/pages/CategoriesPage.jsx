import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Button from "@components/Button";
import MoviesList from "@components/MoviesList";
import { ArrowLeftIcon } from "@icons";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import CategoryList from "../components/CategoryList";
import useApi from "@hooks/useApi";

const CategoriesPage = () => {
  const { categorySlug } = useParams();
  const [categoryId, categoryName] = categorySlug.split("&");
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    const state = location.state;

    if (state?.prevLocation) {
      navigate(state.prevLocation.pathname);
    } else {
      navigate("/");
    }
  };

  const { data, loading: loadingCategories } = useApi({
    endpoint: "/genre/movie/list",
  });

  const categories = data?.genres;

  

  return (
    <>
      <SectionLayout>
        <SectionLayoutHeader title={categoryName}>
          <Button icon={<ArrowLeftIcon />} title="Go back" onClick={goBack} />
        </SectionLayoutHeader>
        <CategoryList categories={categories} loading={loadingCategories} activeCategory={categoryId} xScroll/>
        <MoviesList movies={[]} loading={false} />
      </SectionLayout>
    </>
  );
};

export default CategoriesPage;
