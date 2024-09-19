//-----------------------
// Pedidos Model
//-----------------------
const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const pedidosModel = db.define("pedidos", {
  FECHA_COMPRA: { type: DataTypes.DATE },
  IDCLIENTE: { type: DataTypes.INTEGER },
  IDPRODUCTO: { type: DataTypes.INTEGER },
  CANTIDAD: { type: DataTypes.DOUBLE },
  PRECIO: { type: DataTypes.DOUBLE },
  IMPORTE: { type: DataTypes.DOUBLE },
  IDESTADO: { type: DataTypes.INTEGER },
});

module.exports = pedidosModel;
