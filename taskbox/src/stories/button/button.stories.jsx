import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "basic/Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "button",
  variant: "contained",
  color: "success",
  rounded: true,
  size: "small",
  shadow: false,
  onClick: () => {},
};

export const Error = Template.bind({});
Error.args = {
  title: "button",
  variant: "contained",
  color: "error",
  rounded: false,
  size: "small",
  shadow: false,
  onClick: () => {},
};

export const Nomal = Template.bind({});
Nomal.args = {
  title: "button",
  variant: "contained",
  color: "normal",
  rounded: false,
  size: "small",
  shadow: false,
  onClick: () => {},
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: "button",
  variant: "outlined",
  color: "normal",
  rounded: false,
  size: "small",
  shadow: false,
  onClick: () => {},
};

export const Not = Template.bind({});
Not.args = {
  title: "button",
  variant: "not",
  color: "normal",
  rounded: false,
  size: "small",
  shadow: true,
  onClick: () => {},
};

export const Rounded = Template.bind({});
Rounded.args = {
  title: "button",
  variant: "outlined",
  color: "normal",
  rounded: true,
  size: "small",
  shadow: false,
  onClick: () => {},
};

export const Middle = Template.bind({});
Middle.args = {
  title: "button",
  variant: "outlined",
  color: "normal",
  rounded: true,
  size: "middle",
  shadow: false,
  onClick: () => {},
};

export const Large = Template.bind({});
Large.args = {
  title: "button",
  variant: "outlined",
  color: "normal",
  rounded: true,
  size: "large",
  shadow: false,
  onClick: () => {},
};

export const Shadow = Template.bind({});
Shadow.args = {
  title: "button",
  variant: "outlined",
  color: "normal",
  rounded: true,
  size: "large",
  shadow: true,
  onClick: () => {},
};
