import request from "supertest";
import { Express } from "express-serve-static-core";

import { app } from "./app";
import {
  createOrderService,
  fetchOrderService,
  fetchSingleOrderService,
} from "../services/order.service";

let server: Express;

beforeAll(async () => {
  server = app;
});

describe("Orders", () => {
  test("should return 201 & valid response of order created", async () => {
    const orderPayload = {
      product: "Antibiotics",
      quantity: 7,
      customerInfo: {
        custName: "John Bosco",
        custAddress: "123 Sub Street",
        custCity: "Cityville",
        custState: "State",
        custZipcode: "123456",
        custCountry: "Country",
      },
    };
    const order = await createOrderService("healthmart", orderPayload);

    expect(order.status).toEqual(201);
    expect(order.message).toBe("Order successfully created");
  });

  test("should return 200 & valid response if orders are found for the pharmacy", async () => {
    const orders = await fetchOrderService("healthmart");

    expect(orders.status).toEqual(200);
    expect(orders.message).toBe("Orders successfully fetched");
    expect(orders!.data!.length).toBeGreaterThan(0);
  });

  test("should return 404 & valid response if orders are not found for the pharmacy", async () => {
    const orders = await fetchOrderService("walmart");

    expect(orders.status).toEqual(404);
    expect(orders.message).toBe("Order not found");
  });

  test("should return 200 & valid response if specific order is found for the pharmacy", async () => {
    const orderId = "1";
    const orders = await fetchSingleOrderService("healthmart", orderId);

    expect(orders.status).toEqual(200);
    expect(orders.message).toBe("Order successfully fetched");
    expect(Number(orders!.data!.id)).toBe(Number(orderId));
  });

  test("should return 404 & valid response if specific order is found for the pharmacy", async () => {
    const orderId = "1";
    const orders = await fetchSingleOrderService("walmart", orderId);

    expect(orders.status).toEqual(404);
    expect(orders.message).toBe("Order not found");
  });
});
