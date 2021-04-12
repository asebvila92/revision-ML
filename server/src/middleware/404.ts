import { Request, Response } from "express";
import { ApiResponse } from "../data/apiML/types";

const notFoundRoute = (req: Request, res: Response): void => {
  const response: ApiResponse<[]> = {
    responseCode: 404,
    responseMessage: "Route not found",
    responseContent: [],
  };
  res.send(response);
};
export default notFoundRoute;
