import React from "react";
import { useNavigate, useLocation, Outlet, useParams } from "react-router-dom";
import Button from "@components/Button";
import { ArrowLeftIcon } from "@icons";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import CategoryList from "../components/CategoryList";
import useApi from "@hooks/useApi";

const CategoriesPage = () => {
  const { categorySlug } = useParams();
  let title = categorySlug?.split("&")[1] || 'Categories';
  let categoryId = categorySlug?.split("&")[0] || null;

  const navigate = useNavigate();
  const location = useLocation();

  const { data, loading: loadingCategories } = useApi({
    endpoint: "/genre/movie/list",
  });

  const categories = data?.genres;

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
        <SectionLayoutHeader title={title}>
          <Button icon={<ArrowLeftIcon />} title="Go back" onClick={goBack} />
        </SectionLayoutHeader>
        <CategoryList
          categories={categories}
          loading={loadingCategories}
          activeCategory={categoryId}
        />
        {!categorySlug && <span style={{display: 'block', textAlign: 'center', fontSize: '24px', fontWeight: 'bold'}}>Choose a category</span>}
        <Outlet/>

      </SectionLayout>
    </>
  );
};

export default CategoriesPage;
