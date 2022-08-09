import React from "react";
import "./button.css";
import PropTypes from "prop-types";

/** 버튼 컴포넌트입니다. */
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
  /** 버튼에 들어갈 이름입니다 */
  title: PropTypes.string,
  /** 버튼에 색상 채우기 방식입니다.  */
  variant: PropTypes.oneOf(["contained", "outlined", "not"]),
  /** 버튼의 색깔입나다.  */
  color: PropTypes.oneOf(["success", "normal", "error"]),
  /** 버튼에 크기를 지정하는 속성입니다. */
  size: PropTypes.oneOf(["small", "middle", "large"]),
  /** 둥근 모서리 적용 여부 */
  rounded: PropTypes.bool,
  /** 그림자 속성 적용 여부 */
  shadow: PropTypes.bool,
  /** 클릭 이벤트 */
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
