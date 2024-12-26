const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const User = require("./User");

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define relationships
Post.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Post, { foreignKey: "user_id" });

module.exports = Post;
