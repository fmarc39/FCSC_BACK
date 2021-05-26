const Clients = require("./clients");
const Payments = require("./payments");
const Comments = require("./comments");

Clients.hasMany(Comments, {
  foreignKey: "client_id",
  as: "comments",
  onDelete: "cascade",
  hooks: true,
});

Comments.belongsTo(Clients, {
  foreignKey: "client_id",
  as: "comments",
});

Clients.hasMany(Payments, {
  foreignKey: "client_id",
  as: "payments",
  onDelete: "cascade",
  hooks: true,
});

Payments.belongsTo(Clients, {
  foreignKey: "client_id",
  as: "payment",
});

module.exports = { Clients, Payments, Comments };
