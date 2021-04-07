import { Application } from "express";
import { productController } from "../controller";

/* all routes here with controller name in the slash */
const routes = (app: Application) => {
  app.use("/product", productController);
};

export default routes;
