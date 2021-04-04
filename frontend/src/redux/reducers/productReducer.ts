import { GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../constants";

import { GetProductsAction } from "../actions/types";

interface ProductReducerState {
  products?: [] | null;
}

const initialState: ProductReducerState = {
  products: [],
};

const productReducer = (state = initialState, action: GetProductsAction): ProductReducerState => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
};

export default productReducer;
