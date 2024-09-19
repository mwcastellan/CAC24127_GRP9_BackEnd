//-----------------------
// Reporte_01 Model
//-----------------------
const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const reporte_01Model = db.define("Vw_Productos", {
  ID: { type: DataTypes.INTEGER },
  DESCRIPCION: { type: DataTypes.STRING },
  DESCRIPCION_AMPLIA: { type: DataTypes.STRING },
  FECHA_VTO: { type: DataTypes.DATE },
  STOCK_DISPONIBLE: { type: DataTypes.DOUBLE },
  NOMBRE_IMAGEN: { type: DataTypes.STRING },
  PRECIO: { type: DataTypes.DOUBLE },
  IDSUBCATEGORIA: { type: DataTypes.INTEGER },
  DESCRIPCION_SUBCATEGORIA: { type: DataTypes.STRING },
  PATH_SUBCATEGORIA: { type: DataTypes.STRING },
  IDCATEGORIA: { type: DataTypes.INTEGER },
  DESCRIPCION_CATEGORIA: { type: DataTypes.STRING },
  PATH_CATEGORIA: { type: DataTypes.STRING },
});

module.exports = reporte_01Model;
