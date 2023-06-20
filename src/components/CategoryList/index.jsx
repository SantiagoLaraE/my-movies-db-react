import React from "react";
import "./CategoryList.scss";
import { Link, useLocation } from "react-router-dom";
import { formatToURL } from "@utils";

const CategoryList = ({ categories, loading, xScroll, activeCategory }) => {
  activeCategory = Number(activeCategory)
  return (
    <article className={`Categories__list ${xScroll ? "x-scroll" : ""}`}>
      {loading && <CategoryLoading />}

      {!loading &&
        !!categories?.length &&
        categories.map((category) => (
          <CategoryLink key={category.name} category={category} activeCategory={activeCategory}  />
        ))}

      {!loading && !categories?.length && <p>No results</p>}
    </article>
  );
};

const CategoryLink = ({ category, activeCategory }) => {
  const location = useLocation();
  const categorySlug = `/categories/${category.id}&${formatToURL(
    category.name
  )}`;
  return (
    <Link
      className={`CategoryLink ${category.id === activeCategory ? 'active': ''}`}
      to={categorySlug}
      state={{ prevLocation: location }}
    >
      {category.name}
    </Link>
  );
};

const CategoryLoading = () => {
  return <div className="category-loading"></div>;
};

export default CategoryList;
