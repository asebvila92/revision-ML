import { ErrorReducerState } from "../actions/types";
import { THROW_ERROR, CLEAN_ERROR } from "../constants";

export const throwError = (data: ErrorReducerState) => {
  return {
    type: THROW_ERROR,
    data: data,
  };
};

export const cleanError = () => ({
  type: CLEAN_ERROR,
});
