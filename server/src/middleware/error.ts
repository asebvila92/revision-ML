import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction): void => {
  // eslint-disable-next-line no-console
  console.error("MIDDLEWARE ERROR ---> ", err.message);
  res.send({ ...err, message: err.message });
  next();
};

export default errorMiddleware;
