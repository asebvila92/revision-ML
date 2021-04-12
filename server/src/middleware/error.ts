import { Request, Response, Errback, NextFunction } from "express";
import { ApiResponse } from "../data/apiML/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const error = (err: Errback, req: Request, res: Response, next: NextFunction): void => {
  const response: ApiResponse<[]> = {
    responseCode: 500,
    responseMessage: `Something broke ---> ${err}`,
    responseContent: [],
  };
  // eslint-disable-next-line no-console
  console.error("MIDDLEWARE ERROR ---> ", err);
  res.send(response);
};
export default error;
