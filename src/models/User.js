const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  post_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
