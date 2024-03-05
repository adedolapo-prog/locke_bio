import { defaultParameters } from "../interface/defaultParameters";
import { IResponse, responseModel } from "../interface/response.interface";
import Order, { IOrderExt } from "../models/order";
import Pharmacy from "../models/pharmacy";

const createOrderService = async (
  pharmacyName: string,
  orderPayload: IOrderExt
): Promise<IResponse> => {
  const pharmacy = await Pharmacy.findOne({
    where: {
      integrationName: pharmacyName,
    },
    attributes: ["id"],
  });

  if (!pharmacy) return { status: 404, message: "Pharmacy not found" };

  const order = await Order.create({
    ...orderPayload,
    pharmacyId: pharmacy.id,
  });

  return { status: 201, message: "Order successfully created", data: order };
};

const fetchOrderService = async (
  pharmacyName: string,
  params?: { limit?: string; offset?: string }
): Promise<IResponse> => {
  const orders = await Order.findAll({
    include: [
      {
        model: Pharmacy,
        where: { integrationName: pharmacyName },
        attributes: ["integrationName"],
      },
    ],
    limit: Number(params?.limit) ?? defaultParameters.limit,
    offset:
      Number(params?.offset) * Number(params?.limit) ??
      defaultParameters.offset,
  });

  if (orders.length < 1) return { status: 404, message: "Order not found" };

  return {
    status: 200,
    message: "Orders successfully fetched",
    data: orders.map((order) => responseModel(pharmacyName, order)),
  };
};

export { createOrderService, fetchOrderService };
