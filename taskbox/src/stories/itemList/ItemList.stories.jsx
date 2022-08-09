import React from "react";

import ItemList from "./ItemList";

export default {
  component: ItemList,
  title: "basic/ItemList",
};

const Template = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {};
