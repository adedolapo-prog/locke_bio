import { Request, Response } from "express";

const createPharmacyController = async (req: Request, res: Response) => {
  try {
    // const product = await fetchSingleProductService({ id, currency });

    console.log("hi hi");
    res.status(200).json({});
  } catch (error: any) {
    console.log("err", error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

export { createPharmacyController };
