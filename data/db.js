const pjson = require("../package.json");
const msg_cabecera = `Sistema: ${pjson.name}`;
const connection_def = {
  host: "mysql-mcastellan.alwaysdata.net",
  user: "363082_grp9",
  password: "CaC24127GRP9",
  database: "mcastellan_grp9",
};

const mysql = require("mysql2");
const connection = mysql.createConnection(connection_def);

connection.connect((err) => {
  if (err) {
    console.error(
      `${msg_cabecera} - Error al conectar a la base de datos: `,
      err
    );
    return;
  }
  console.log(`${msg_cabecera} - Base de Datos :  ${connection_def.host} - ${connection_def.database}`);
});
module.exports = connection;
