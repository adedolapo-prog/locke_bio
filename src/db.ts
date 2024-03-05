import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  //Specify the path to your models
  // Add each model to the sequelize instance
  models: [__dirname + "/models"],
});

export default sequelize;
