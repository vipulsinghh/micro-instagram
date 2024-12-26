import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import User from "./user";

class Post extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public images!: string[];
  public user_id!: number;
}

Post.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: "Post" }
);

// Define relationships
Post.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Post, { foreignKey: "user_id" });

export default Post;
