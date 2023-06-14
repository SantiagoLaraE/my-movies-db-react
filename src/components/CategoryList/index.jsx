import React from "react";
import "./CategoryList.scss";

const CategoryList = ({ categories, loading, verticalScroll }) => {
  return (
    <article
      className={`HeroMovieCategories__list ${verticalScroll ? "scroll" : ""}`}
    >
      {loading && <CategoryLoading />}

      {!loading &&
        categories.map((category) => (
          <CategoryLink key={category.title} title={category.title} />
        ))}
    </article>
  );
};

const CategoryLink = ({ title }) => {
  return <a className="CategoryLink">{title}</a>;
};

const CategoryLoading = () => {
  return <div className="category-loading"></div>;
};

export default CategoryList;
