import React from "react";
import './Button.css'

const Button = ({ className, variant, children, onClick }) => {
  return (
    <button
      className={(className ? className + " " : "") + variant}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
