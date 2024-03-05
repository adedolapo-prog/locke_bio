import { Request, Response } from "express";
import { IOrderExt } from "../models/order";
import {
  createOrderService,
  fetchOrderService,
  fetchSingleOrderService,
} from "../services/order.service";

const createOrderController = async (req: Request, res: Response) => {
  try {
    const payload = req.body as IOrderExt;
    const pharmacyName = req.originalUrl.split("/")[1];

    const order = await createOrderService(pharmacyName, payload);

    res.status(order.status).json(order);
  } catch (error: any) {
    console.log("err", error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

const fetchOrdersController = async (req: Request, res: Response) => {
  try {
    const pharmacyName = req.originalUrl.split("/")[1];
    const orders = await fetchOrderService(pharmacyName, {
      limit: req.query.limit as string,
      offset: req.query.offset as string,
    });

    res.status(orders.status).json(orders);
  } catch (error: any) {
    console.log("err", error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

const fetchSingleOrderController = async (req: Request, res: Response) => {
  try {
    const pharmacyName = req.originalUrl.split("/")[1];
    const orderId = req.params.orderId;
    const order = await fetchSingleOrderService(pharmacyName, orderId);

    res.status(order.status).json(order);
  } catch (error: any) {
    console.log("err", error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

export {
  createOrderController,
  fetchOrdersController,
  fetchSingleOrderController,
};
