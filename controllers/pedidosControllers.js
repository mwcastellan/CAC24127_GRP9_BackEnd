const db = require("../data/db.js");
const pjson = require("../package.json");
const msg_cabecera = `Sistema: ${pjson.name}`;

const traerPedidos = (req, res) => {
  const sql = "Select * from mcastellan_grp9.Vw_Pedidos order by id asc";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const traerUnPedido = (req, res) => {
  res.send(`${msg_cabecera} - Busco el pedido de la BD y lo envio en .JSON`);
};

module.exports = {traerPedidos, traerUnPedido};
