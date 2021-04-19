import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Breadcrumb from "./components/breadcrumb";
import { Breadcrumb as Categories, Item } from "./redux/actions/types";
import ListItem from "./components/listItem";

configure({ adapter: new Adapter() });

describe("Render Breadcrumb", () => {
  it("amount of categories", () => {
    const categories: Categories = ["cat1", "cat2", "cat3", "cat3"];
    const wrapper = shallow(<Breadcrumb categories={categories} />);
    expect(wrapper.find("li").length).toBe(categories.length);
  });
});

describe("Render ListItem", () => {
  it("test shipping", () => {
    const item: Item = {
      id: "some id",
      title: "title",
      price: { amount: 200, currency: "USD", decimals: 0 },
      condition: "used",
      picture: "picture",
      free_shipping: true,
    };
    const testClick = jest.fn();

    const wrapper = shallow(<ListItem item={item} onClickItem={testClick} />);
    wrapper.find("div").at(1).simulate("click");

    expect(testClick.mock.calls).toEqual([["some id"]]);
    expect(wrapper.find("img").length).toBe(2);
  });
});
