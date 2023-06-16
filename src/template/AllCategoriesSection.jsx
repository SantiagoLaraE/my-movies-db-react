import React from "react";
import useApi from "@hooks/useApi";
import { SectionLayout, SectionLayoutHeader } from "@layout/SectionLayout";
import CategoryList from "@components/CategoryList";

const AllCategoriesSection = () => {
  const { data, loading } = useApi({ endpoint: "/genre/movie/list" });
  const categories = data?.genres;
  return (
    <SectionLayout>
      <SectionLayoutHeader title="Categories" center />
      <CategoryList categories={categories} loading={loading} />
    </SectionLayout>
  );
};

export default AllCategoriesSection;
