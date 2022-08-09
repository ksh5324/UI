import React from "react";
import "./itemList.css";
import PropTypes from "prop-types";

const ItemList = ({
  header,
  children,
  direction,
  padding,
  width,
  height,
  rounded,
  elementGap,
}) => {
  return (
    <div
      style={{ width: width, height: height, paddingLeft: padding }}
      className={`itemList ${rounded ? "rounded" : ""}`}
    >
      <div
        style={{ marginBottom: padding, paddingTop: padding }}
        className="item-list__header"
      >
        {header}
      </div>
      <div
        className={`${direction === "row" ? "row" : "column"}`}
        style={{
          gap: elementGap,
          paddingTop: "5px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  /** item list에 상단 헤더 영역입니다.  */
  header: PropTypes.element,
  /** 자식 item 요소가 들어갈 부분입니다. */
  children: PropTypes.any,
  /** item의 방향 속성입니다. */
  direction: PropTypes.oneOf(["row", "column"]),
  /** item list의 padding 크기입니다. */
  padding: PropTypes.number | PropTypes.string,
  /** 너비 */
  width: PropTypes.number | PropTypes.string,
  /** 높이 */
  height: PropTypes.number | PropTypes.string,
  /** 둥근 모서리 적용 여부 */
  rounded: PropTypes.bool,
  elementGap: PropTypes.number | PropTypes.string,
};

ItemList.defaultProps = {
  width: "auto",
  height: "auto",
  padding: 0,
  direction: "row",
  rounded: false,
  elementGap: "20px",
};

export default ItemList;
