import reducer, { ItemReducerState } from "../reducers/itemReducer";
import { Search, SearchItemAction } from "../actions/types";
import { SEARCH_ITEM } from "../constants";

describe("Item Reducer", () => {
  const initialState: ItemReducerState = {
    search: {
      categories: ["technology", "phones", "smartphones"],
      items: [
        {
          id: "1",
          title: "item 1",
          condition: "used",
          picture: "a picture",
          free_shipping: true,
          price: { amount: 112, decimals: 0, currency: "USD" },
        },
      ],
    },
  };

  it("dispatch search", () => {
    const newData: Search = {
      categories: ["home", "table"],
      items: [
        {
          id: "2",
          title: "item 2",
          condition: "used",
          picture: "a picture",
          free_shipping: true,
          price: { amount: 10, decimals: 0, currency: "ARG" },
        },
        {
          id: "3",
          title: "item 3",
          condition: "used",
          picture: "a picture",
          free_shipping: true,
          price: { amount: 200, decimals: 0, currency: "USD" },
          description: "a description",
        },
      ],
    };
    const action: SearchItemAction = { type: SEARCH_ITEM, data: newData };
    const result = reducer(initialState, action);
    expect(result).toEqual({ search: newData });
    expect(result.search.items.length).toEqual(2);
    expect(result.search.categories.length).toEqual(2);
    expect(result.search).not.toBe({ newData });
  });

  it("dispatch unknoun action", () => {
    const action: any = { type: "UNKNOUN", data: [{ search: {} }] };
    const result = reducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});
