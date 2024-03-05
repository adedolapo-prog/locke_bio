import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import routes from "./routes";
import sequelize from "./db";
import { seedDatabase } from "./models/seeder/pharmacy.seed";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());
app.use(cors());

routes(app);

const main = async () => {
  try {
    await sequelize.sync();
    await seedDatabase();
    console.log("Database connected...");

    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Unable to connect to the database.");
    process.exit(1);
  }

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) return res.status(500).json({ msg: "Something went wrong" });
  });

  app.use("*", (req: Request, res: Response): Response => {
    return res.status(404).json({ msg: "Route not found" });
  });
};

main();
