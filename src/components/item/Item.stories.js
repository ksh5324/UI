import React from "react";
import Button from "../button/Button";
import Item from "./Item";

export default {
  component: Item,
  title: "Item",
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "confirm",
  title: "title",
  description: "description",
  tag: ["#tag", "#tag"],
  good: 100,
  children: (
    <>
      <Button
        color="error"
        onClick={() => {}}
        rounded
        size="small"
        title="error"
        variant="outlined"
      />
      <Button
        color="success"
        onClick={() => {}}
        rounded
        size="small"
        title="check"
        variant="outlined"
      />
    </>
  ),
};

export const Check = Template.bind({});
Check.args = {
  type: "check",
  title: "title",
  description: "descripalsdfjlskdf",
  tag: ["#tag", "#tag"],
  good: 1000,
  checked: true,
};

export const Star = Template.bind({});
Star.args = {
  type: "star",
  score: 3,
  description: "descriptioasdfljsn",
};
