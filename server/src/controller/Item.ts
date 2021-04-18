import express, { NextFunction, Request, Response } from "express";
import { searchItem, getItemById } from "../services";
import ApiError from "../utils/error";

export interface IRequest extends Request {
  query: { q: string | undefined };
}

const itemController = express.Router();

/* search */
itemController.get("/", async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const searchInput = req.query.q;
    if (searchInput) {
      const response = await searchItem(searchInput);
      res.json(response);
    } else {
      throw new ApiError("missing queryparam q", 404);
    }
  } catch (error) {
    next(error);
  }
});

/* item */
itemController.get("/:id", async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const itemId = req.params.id;
    if (itemId) {
      const response = await getItemById(itemId);
      res.json(response);
    } else {
      throw new ApiError("missing parameter id", 404);
    }
  } catch (error) {
    next(error);
  }
});

export default itemController;
