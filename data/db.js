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

// mysql2 - Defino solamente, no tiene uso, porque VERCEL no instala el paquete de mysql2 
// si no se hace referencia a él. Se usa Sequelize.
// Dá mensaje de error que se instale mysql2 manualmente.
const wmysql = require("mysql2");
const wmysql_conn = wmysql.createConnection({
  host: connection_host,
  user: connection_user,
  password: connection_password,
  database: connection_database,
});
// 

module.exports = db;
