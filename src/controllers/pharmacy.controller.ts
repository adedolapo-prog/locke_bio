import { Request, Response } from "express";
import { IPharmacyExt } from "../models/pharmacy";
import {
  createPharmacyService,
  fetchPharmacyService,
} from "../services/pharmacy.service";

const createPharmacyController = async (req: Request, res: Response) => {
  try {
    const pharmacyInfo = req.body as IPharmacyExt;

    const pharmacy = await createPharmacyService(pharmacyInfo);

    res.status(pharmacy.status).json(pharmacy);
  } catch (error: any) {
    console.log("err", error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

const fetchPharmacyController = async (req: Request, res: Response) => {
  try {
    const pharmacy = await fetchPharmacyService();

    res.status(pharmacy.status).json(pharmacy);
  } catch (error: any) {
    console.log("err", error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

export { createPharmacyController, fetchPharmacyController };
