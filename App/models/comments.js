const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Comments extends Model {}

Comments.init(
  {
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "comments",
  }
);

module.exports = Comments;
