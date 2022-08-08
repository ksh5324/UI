import * as React from 'react';
import React__default from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject$2;

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      theme = _ref.theme,
      size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width;
  return /*#__PURE__*/React__default.createElement(ButtonStyle, null, /*#__PURE__*/React__default.createElement("button", {
    className: "".concat(theme, " ").concat(size),
    onClick: onClick,
    disabled: disabled,
    style: {
      width: "".concat(width)
    }
  }, children));
};

Button.defaultProps = {
  theme: "primary",
  size: "medium"
};
var ButtonStyle = styled.span(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  button {\n    outline: none;\n    border: none;\n    box-sizing: border-box;\n    height: 2rem;\n    font-size: 0.875rem;\n    padding: 0 1rem;\n    border-radius: 0.25rem;\n    line-height: 1;\n    font-weight: 600;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    &:focus {\n      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n    }\n    &:disabled {\n      cursor: not-allowed;\n    }\n    svg {\n      width: 1em;\n      margin-right: 1em;\n    }\n  }\n  .secondary {\n    background: #e9ecef;\n    color: #343a40;\n    svg {\n      fill: #343a40;\n    }\n    &:hover:enabled {\n      background: #f1f3f5;\n    }\n    &:active:enabled {\n      background: #dee2e6;\n    }\n    &:disabled {\n      color: #c6d3e1;\n    }\n  }\n  .primary {\n    background: #20c997;\n    color: white;\n    svg {\n      fill: white;\n    }\n    &:hover:enabled {\n      background: #38d9a9;\n    }\n    &:active:enabled {\n      background: #12b886;\n    }\n    &:disabled {\n      background: #aed9cc;\n      svg {\n        fill: #c6d3e1;\n      }\n    }\n  }\n  .tertiary {\n    background: none;\n    color: #20c997;\n    svg {\n      fill: #20c997;\n    }\n    &:hover:enabled {\n      background: #e6fcf5;\n    }\n    &:active:enabled {\n      background: #c3fae8;\n    }\n    &:disabled {\n      color: #bcd9d0;\n      svg {\n        fill: #bcd9d0;\n      }\n    }\n  }\n  .small {\n    height: 1.75rem;\n    font-size: 0.75rem;\n    padding: 0 0.875rem;\n  }\n  .medium {\n    height: 2.5rem;\n    font-size: 1rem;\n    padding: 0 1rem;\n  }\n  .big {\n    height: 3rem;\n    font-size: 1.125rem;\n    padding: 0 1.5rem;\n  }\n"]))); // const themes = {

var _templateObject$1;

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
var ButtonGroup = function ButtonGroup(_ref) {
  var direction = _ref.direction,
      rightAlign = _ref.rightAlign,
      children = _ref.children,
      gap = _ref.gap,
      className = _ref.className;
  return /*#__PURE__*/React__default.createElement(ButtonGroupStyle, {
    defaultValue: gap,
    slot: direction
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(className, " ").concat(direction === "row" ? "marginLeft" : "marginTop", " ").concat(rightAlign ? "rightAlignStyle" : "")
  }, children));
};

var ButtonGroupStyle = styled.span(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  div {\n    display: flex;\n    flex-direction: ", ";\n  }\n  .marginLeft span + span {\n    margin-left: ", ";\n  }\n  .marginTop span + span {\n    margin-top: ", ";\n  }\n\n  .rightAlignStyle {\n    justify-content: flex-end;\n  }\n"])), function (prop) {
  return prop.slot;
}, function (prop) {
  return prop.defaultValue;
}, function (prop) {
  return prop.defaultValue;
});
ButtonGroup.defaultProps = {
  direction: "row",
  gap: "0.5rem"
};

var _templateObject;

var Dialog = function Dialog(props) {
  return /*#__PURE__*/React__default.createElement(DialogStyle, null, /*#__PURE__*/React__default.createElement("div", {
    className: "gray"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "white"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "whiteBox"
  }, /*#__PURE__*/React__default.createElement("h3", null, "\uD3EC\uC2A4\uD2B8 \uC0AD\uC81C"), /*#__PURE__*/React__default.createElement("p", null, "\uD3EC\uC2A4\uD2B8\uB97C \uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"), /*#__PURE__*/React__default.createElement(ButtonGroup, {
    direction: "row",
    gap: "10px",
    rightAlign: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    theme: "tertiary"
  }, "\uCDE8\uC18C"), /*#__PURE__*/React__default.createElement(Button, null, "\uC0AD\uC81C")))));
};

var DialogStyle = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  .gray {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    z-index: 10;\n    background: rgba(0, 0, 0, 0.5);\n  }\n  .white {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    z-index: 15;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .whiteBox {\n    box-sizing: border-box;\n    border-radius: 4px;\n    width: 25rem;\n    background: white;\n    box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);\n    padding: 2rem;\n\n    h3 {\n      font-size: 1.5rem;\n      color: #343a40;\n      margin-top: 0;\n      margin-bottom: 1rem;\n    }\n\n    p {\n      font-size: 1.125rem;\n      margin: 0;\n      color: #868e96;\n      margin-bottom: 3rem;\n    }\n  }\n"])));

var _path$2;

function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgExit = function SvgExit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "m24 20.188-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z"
  })));
};

var _path$1;

function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgHeart = function SvgHeart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"
  })));
};

var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPencil = function SvgPencil(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M7.127 22.564.001 24l1.438-7.125 5.688 5.689zM2.853 15.46l5.688 5.689 15.46-15.46L18.312 0 2.853 15.46z"
  })));
};

var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  exit: SvgExit,
  heart: SvgHeart,
  pencil: SvgPencil
});

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  var SVGIcon = icons[icon];
  return /*#__PURE__*/React__default.createElement(SVGIcon, {
    style: {
      fill: color || "currentColor",
      width: size,
      height: "auto"
    },
    className: className
  });
};

export { Button, ButtonGroup, Dialog, Icon };
