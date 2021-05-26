const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Payments extends Model {}

Payments.init(
  {
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "payments",
  }
);

module.exports = Payments;
