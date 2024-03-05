import { IResponse } from "../interface/response.interface";
import Pharmacy, { IPharmacyExt } from "../models/pharmacy";

const createPharmacyService = async (
  pharmacyPayload: IPharmacyExt
): Promise<IResponse> => {
  console.log("pharmacyInfo", pharmacyPayload);

  const validatePharmacy = await Pharmacy.findOne({
    where: {
      integrationName: pharmacyPayload.integrationName,
    },
  });

  if (validatePharmacy)
    return { status: 400, message: "Pharmacy already exists" };

  const pharmacy = await Pharmacy.create({
    ...pharmacyPayload,
  });

  return {
    status: 201,
    message: "Pharmacy successfully created",
    data: pharmacy,
  };
};

const fetchPharmacyService = async (): Promise<IResponse> => {
  const pharmacy = await Pharmacy.findAll();

  if (pharmacy.length < 1)
    return { status: 404, message: "Pharmacy not found" };

  return {
    status: 200,
    message: "Pharmacy successfully fetched",
    data: pharmacy,
  };
};

export { createPharmacyService, fetchPharmacyService };
