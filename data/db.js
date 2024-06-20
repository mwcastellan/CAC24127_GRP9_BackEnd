const connection_host = "mysql-mcastellan.alwaysdata.net";
const connection_user = "363082_grp9";
const connection_password = "CaC24127GRP9";
const connection_database = "mcastellan_grp9";
const connection_dialect = "mysql";

const { Sequelize } = require("sequelize");

const db = new Sequelize(
  connection_database,
  connection_user,
  connection_password,
  {
    host: connection_host,
    dialect: connection_dialect,
  }
);

module.exports = db;
