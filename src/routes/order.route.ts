import { Router } from "express";
import {
  createOrderController,
  fetchOrdersController,
  fetchSingleOrderController,
} from "../controllers/order.controller";
const orderRoute = Router();

orderRoute.route("/").post(createOrderController).get(fetchOrdersController);
orderRoute.route("/:orderId").get(fetchSingleOrderController);

export default orderRoute;
