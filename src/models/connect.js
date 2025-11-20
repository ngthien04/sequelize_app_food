import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "db_appfood",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "1234",
  {
    dialect: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 3306,
  }
);

export { sequelize };

