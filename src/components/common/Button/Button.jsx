import React from "react";

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
