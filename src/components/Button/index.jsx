import React from "react";

const Button = (props) => {
  const { icon, title, className, variant } = props;
  return (
    <button {...props} className={`button ${variant} ${className}`} title={title}>
      {icon}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
