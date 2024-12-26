import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME as string, // Loads DB name from .env.
  process.env.DB_USER as string, // Loads DB username.
  process.env.DB_PASSWORD as string, // Loads DB password.
  {
    host: process.env.DB_HOST, // Loads DB host.
    dialect: "postgres", // Specifies PostgreSQL as the database.
  }
);

export default sequelize; // Exports the Sequelize instance.
