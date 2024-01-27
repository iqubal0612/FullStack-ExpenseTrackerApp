const Sequelize = require("sequelize");

const sequelize = new Sequelize("expensetracker", "root", "Asif@766735", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
