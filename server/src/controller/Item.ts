import express, { NextFunction, Request, Response } from "express";
import { searchItem, getItemById } from "../services";

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
      throw new Error("missing queryparam q");
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
      throw new Error("missing parameter id");
    }
  } catch (error) {
    next(error);
  }
});

export default itemController;
