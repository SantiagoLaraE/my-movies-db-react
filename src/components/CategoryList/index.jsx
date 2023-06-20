import React from "react";
import "./CategoryList.scss";
import { Link } from "react-router-dom";
import { formatToURL } from "@utils";

const CategoryList = ({ categories, loading, xScroll }) => {
  return (
    <article className={`Categories__list ${xScroll ? "x-scroll" : ""}`}>
      {loading && <CategoryLoading />}

      {!loading &&
        !!categories?.length &&
        categories.map((category) => (
          <CategoryLink key={category.name} category={category} />
        ))}

      {!loading && !categories?.length && <p>No results</p>}
    </article>
  );
};

const CategoryLink = ({ category }) => {
  const categorySlug = `/categories/${category.id}&${formatToURL(
    category.name
  )}`;
  return (
    <Link className="CategoryLink" to={categorySlug}>
      {category.name}
    </Link>
  );
};

const CategoryLoading = () => {
  return <div className="category-loading"></div>;
};

export default CategoryList;
