import React from "react";
import "./itemList.css";
import PropTypes from "prop-types";

const ItemList = ({ header, children, direction, padding, width, height }) => {
  return <div></div>;
};

ItemList.propTypes = {
  /** item list에 상단 헤더 영역입니다.  */
  header: PropTypes.element,
  /** 자식 item 요소가 들어갈 부분입니다. */
  children: PropTypes.any,
  /** item의 방향 속성입니다. */
  direction: PropTypes.string,
  /** item list의 padding 크기입니다. */
  padding: PropTypes.number | PropTypes.string,
  /** 너비 */
  width: PropTypes.number | PropTypes.string,
  /** 높이 */
  height: PropTypes.number | PropTypes.string,
};

ItemList.defaultProps = {
  width: "auto",
  height: "auto",
  padding: 0,
  direction: "row",
};

export default ItemList;
