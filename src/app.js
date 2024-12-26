const sequelize = require("./config");

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed", err));
