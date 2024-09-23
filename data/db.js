//-----------------------
// db
//-----------------------
const config = require("../config");
const connection_host = config.db.host;
const connection_user = config.db.user;
const connection_password = config.db.password;
const connection_database = config.db.database;
const connection_dialect = config.db.dialect;

const { Sequelize } = require("sequelize");

const db = new Sequelize(
  connection_database,
  connection_user,
  connection_password,
  {
    host: connection_host,
    dialect: connection_dialect,
    logging: false,
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
