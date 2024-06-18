const db = require("../data/db.js");
const pjson = require("../package.json");
const msg_cabecera = `Sistema: ${pjson.name}`;

// Trae los Productos Ordenados -> by idcategoria asc, idsubcategoria asc, id asc
const traerReporte_01 = (req, res) => {
  db.connection;
  const sql = "Select * from mcastellan_grp9.Vw_Productos order by idcategoria asc, idsubcategoria asc, id asc";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = {traerReporte_01};
