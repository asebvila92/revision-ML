import { Application } from "express";
import { itemController } from "../controller";

/* all routes here with controller name in the slash */
const routes = (app: Application): void => {
  app.use("/api/items", itemController);
};

export default routes;
