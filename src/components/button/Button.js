import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ title, variant, color, size, rounded, shadow, onClick }) => {
  return (
    <button
      className={[
        `${color}`,
        `${variant}`,
        `${size}`,
        `${rounded && "rounded"}`,
        `${shadow && "shadow"}`,
      ].join(" ")}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "not"]),
  color: PropTypes.oneOf(["success", "normal", "error"]),
  size: PropTypes.oneOf(["small", "middle", "large"]),
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: "button",
  variant: "contained",
  color: "normal",
  size: "middle",
  rounded: false,
  shadow: false,
  onClick: () => {},
};

export default Button;
