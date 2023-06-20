import React from "react";
import './Button.scss';

const Button = (props) => {
  const { icon, title, className, variant, size } = props;
  return (
    <button {...props} className={`Button ${variant} ${className} ${size}`} title={title}>
      {icon}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
