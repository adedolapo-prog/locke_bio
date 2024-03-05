import { Router } from "express";
import { createPharmacyController, fetchPharmacyController } from "../controllers/pharmacy.controller";
const pharmacyRoute = Router();

pharmacyRoute.route("/").post(createPharmacyController).get(fetchPharmacyController);

export default pharmacyRoute;
