import React from "react";
import "./button.css";

const Button = ({ title, variant, color, size, rounded, shadow }) => {
  return (
    <button
      className={[
        `${color}`,
        `${variant}`,
        `${size}`,
        `${rounded && "rounded"}`,
        `${shadow && "shadow"}`,
      ].join(" ")}
    >
      {title}
    </button>
  );
};

export default Button;
