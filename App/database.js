const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

module.exports = sequelize;
