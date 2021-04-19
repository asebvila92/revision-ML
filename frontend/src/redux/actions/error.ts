import { ErrorAction, ErrorReducerState } from "../actions/types";
import { THROW_ERROR, CLEAN_ERROR } from "../constants";

export const throwError = (data: ErrorReducerState): ErrorAction => {
  return {
    type: THROW_ERROR,
    data: data,
  };
};

export const cleanError = (): ErrorAction => ({
  type: CLEAN_ERROR,
});
