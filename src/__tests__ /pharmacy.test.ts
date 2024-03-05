import request from "supertest";
import { Express } from "express-serve-static-core";

import { app } from "./app";
import { fetchPharmacyService } from "../services/pharmacy.service";

let server: Express;

beforeAll(async () => {
  server = app;
});

describe("Pharmacy", () => {
  test("should return 200 & valid response of pharmacy list", async () => {
    const pharmacy = await fetchPharmacyService();

    expect(pharmacy.status).toEqual(200);
    expect(pharmacy.message).toBe("Pharmacy successfully fetched");
    expect(pharmacy!.data!.length).toBeGreaterThan(0);
  });
});
