import reducer, { initialState } from "../reducers/errorReducer";
import { ErrorReducerState, ErrorAction } from "../actions/types";
import { throwError, cleanError } from "../actions";

describe("Error Reducer", () => {
  const stateWithError: ErrorReducerState = { code: 500, message: "message1", type: "request" };
  const otherStateWithError: ErrorReducerState = { code: 404, message: "message404", type: "request" };

  it("dispatch new error", () => {
    const action: ErrorAction = throwError(stateWithError);

    const result = reducer(initialState, action);
    expect(result).toEqual(stateWithError);
  });

  it("clean error", () => {
    const action: ErrorAction = cleanError();

    const result = reducer(stateWithError, action);
    expect(result).toEqual(initialState);
  });

  it("dispatch error with error state", () => {
    const action: ErrorAction = throwError(otherStateWithError);

    const result = reducer(stateWithError, action);
    expect(result).toEqual(otherStateWithError);
  });
});
