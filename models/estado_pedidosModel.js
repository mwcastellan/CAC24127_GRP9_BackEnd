//-----------------------
// Estado_pedidos Model
//-----------------------
const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const estado_pedidosModel = db.define("estado_pedidos", {
  DESCRIPCION: { type: DataTypes.STRING },
});

module.exports = estado_pedidosModel;
