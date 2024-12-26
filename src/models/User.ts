import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class User extends Model {
  public id!: number;
  public name!: string;
  public mobile_number!: number;
  public address!: string;
  public post_count!: number;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(256), allowNull: false },
    mobile_number: { type: DataTypes.BIGINT, unique: true, allowNull: false },
    address: { type: DataTypes.TEXT, allowNull: true },
    post_count: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  { sequelize, modelName: "User" }
);

export default User;
