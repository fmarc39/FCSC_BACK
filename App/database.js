const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://gziikefcsjcdjb:31d9e44cf7f2d9e3b2991c6bcf4b7b411381150e71a8cde63a577eae25910d45@ec2-54-155-254-112.eu-west-1.compute.amazonaws.com:5432/dlncisgf8tndg",
  {
    define: {
      timestamps: false,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = sequelize;
