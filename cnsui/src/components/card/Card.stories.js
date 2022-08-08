import React from "react";
import Button from "../button/Button";
import Card from "./Card";

export default {
  component: Card,
  title: "Card",
};

const Template = (args) => <Card {...args} />;

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
