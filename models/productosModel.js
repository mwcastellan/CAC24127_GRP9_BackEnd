const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const productosModel = db.define("productos", {
  DESCRIPCION: { type: DataTypes.STRING },
  DESCRIPCION_AMPLIA: { type: DataTypes.STRING },
  FECHA_VTO: { type: DataTypes.DATE },
  STOCK_DISPONIBLE: { type: DataTypes.DOUBLE },
  NOMBRE_IMAGEN: { type: DataTypes.STRING },
  PRECIO: { type: DataTypes.DOUBLE },
  IDSUBCATEGORIA: { type: DataTypes.INTEGER },
});

module.exports = productosModel;
