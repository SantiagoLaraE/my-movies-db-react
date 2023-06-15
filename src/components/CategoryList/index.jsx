import React from "react";
import "./CategoryList.scss";

const CategoryList = ({ categories, loading, xScroll }) => {

  return (
    <article
      className={`Categories__list ${xScroll ? "x-scroll" : ""}`}
    >
      {loading && <CategoryLoading />}

      {!loading &&
        categories.map((category) => (
          <CategoryLink key={category.name} title={category.name} />
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
