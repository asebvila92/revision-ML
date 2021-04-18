export type ErrorAction = {
  type: "THROW_ERROR" | "CLEAN_ERROR";
  data?: ErrorReducerState;
};

export type ErrorReducerState = {
  message: string;
  code: number;
  type: ErrorType;
};

type ErrorType = "routing" | "request" | "";
