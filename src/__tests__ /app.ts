import express from "express";
import sequelize from "../db";
import routes from "../routes";
const PORT = process.env.PORT || 5000;

export const app = express();
export const createServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  routes(app);

  try {
    await sequelize.sync();
    console.log("Database connected...");

    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Unable to connect to the database.");
    process.exit(1);
  }

  return app;
};
