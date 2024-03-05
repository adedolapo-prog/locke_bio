import { Application } from "express";
import pharmacyRoute from "./pharmacy.route";
import orderRoute from "./order.route";

const routes = (app: Application) => {
  app.use("/pharmacy", pharmacyRoute);
  app.use("/:pharmacy/orders", orderRoute);
};

export default routes;
