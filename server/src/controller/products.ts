import express from "express";
import { ApiResponse } from "../apiML/types";
import { Data } from "../models/product";
import { getProduct } from "../services";

const productController = express.Router();

/* GET home products. */
productController.get("/", (req, res, next) => {
  const data: Data = getProduct();
  res.json(data);
});

export default productController;
