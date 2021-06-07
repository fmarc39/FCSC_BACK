const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    timestamps: false,
    require: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  dialectOptions: {
    // ssl: {
    //   require: true,
    //   rejectUnauthorized: false,
    // },
  },
});

module.exports = sequelize;
