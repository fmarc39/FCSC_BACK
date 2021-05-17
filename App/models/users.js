const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Users extends Model {}

Users.init(
  {
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

module.exports = Users;
