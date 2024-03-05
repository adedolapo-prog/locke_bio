import { Router } from "express";
import {
  createOrderController,
  fetchOrdersController,
} from "../controllers/order.controller";
const orderRoute = Router();

orderRoute.route("/").post(createOrderController).get(fetchOrdersController);

export default orderRoute;
