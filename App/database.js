const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgresql://fcsc:fcsc@localhost/fcsc", {
  define: {
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

module.exports = sequelize;
