import React from "react";

import ItemList from "./ItemList";
import Item from "../item/Item";

export default {
  component: ItemList,
  title: "basic/ItemList",
};

const Template = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {
  padding: "40px",
  direction: "row",
  rounded: true,
  header: <div>header 영역</div>,
  width: "500px",
  height: "200px",
  children: (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <Item type="star" score={3} description="descriptioasdfljsn" />
      ))}
    </>
  ),
};
