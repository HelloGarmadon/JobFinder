const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  Storage: "app.db",
});
module.exports = sequelize;
