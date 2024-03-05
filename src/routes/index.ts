import { Application } from "express";
import pharmacyRoute from "./pharmacy.route";

const routes = (app: Application) => {
  app.use("/pharmacy", pharmacyRoute);
};

export default routes;
