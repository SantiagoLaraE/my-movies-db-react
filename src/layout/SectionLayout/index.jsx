import React from "react";
import "./SectionLayout.scss";

const SectionLayout = ({ children }) => {
  return (
    <section id="SectionLayout" className="section">
      <div className="container">{children}</div>
    </section>
  );
};

export const SectionLayoutHeader = ({ children, title, center }) => {
  return (
    <div className={`SectionLayout__header ${center ? "center" : ""}`}>
      <h2 className="SectionLayout__title">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionLayout;
