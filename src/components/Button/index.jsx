import React from "react";

const Button = (props) => {
  const { icon, title, className, variant, size } = props;
  return (
    <button {...props} className={`button ${variant} ${className} ${size}`} title={title}>
      {icon}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
