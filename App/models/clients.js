const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Clients extends Model {}

Clients.init(
  {
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    commercial_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fix_phone: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cel_phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    adress: {
      type: DataTypes.TEXT,
    },
    zip_code: {
      type: DataTypes.TEXT,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subscription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "clients",
  }
);

module.exports = Clients;
