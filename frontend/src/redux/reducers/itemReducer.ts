import { SEARCH_ITEM } from "../constants";

import { SearchItemAction } from "../actions/types";
import { Search } from "../actions/types";

export interface ItemReducerState {
  search: Search;
}

const initialState: ItemReducerState = {
  search: { categories: [], items: [] },
};

const itemReducer = (state = initialState, action: SearchItemAction): ItemReducerState => {
  switch (action.type) {
    case SEARCH_ITEM:
      return {
        ...state,
        search: action.data,
      };
    default:
      return state;
  }
};

export default itemReducer;
