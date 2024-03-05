import { Router } from "express";
import { createPharmacyController } from "../controllers/pharmacy.controller";
const pharmacyRoute = Router();

pharmacyRoute.route("/").post(createPharmacyController);

export default pharmacyRoute;
