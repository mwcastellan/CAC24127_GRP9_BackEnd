const db = require("../data/db.js");
const pjson = require("../package.json");
const msg_cabecera = `Sistema: ${pjson.name}`;

// Trae los Productos
const traerProductos = (req, res) => {
  const sql = "Select * from mcastellan_grp9.Vw_Productos order by id asc";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Traer un Producto en particular
const traerUnProducto = (req, res) => {
  res.send(`${msg_cabecera} - Busco el producto de la BD y lo envio en .JSON`);
};

module.exports = {traerProductos, traerUnProducto};
