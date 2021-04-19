import { THROW_ERROR, CLEAN_ERROR } from "../constants";

import { ErrorAction, ErrorReducerState } from "../actions/types";

export const initialState: ErrorReducerState = {
  type: "",
  message: "",
  code: 0,
};

const errorReducer = (state = initialState, action: ErrorAction): ErrorReducerState => {
  switch (action.type) {
    case THROW_ERROR:
      return {
        ...state,
        ...action.data,
      };
    case CLEAN_ERROR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default errorReducer;
