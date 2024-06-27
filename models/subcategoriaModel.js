const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const subcategoriaModel = db.define("subcategoria", {
  DESCRIPCION: { type: DataTypes.STRING },
  PATH_IMAGEN: { type: DataTypes.STRING },
  IDCATEGORIA: { type: DataTypes.INTEGER },
});

module.exports = subcategoriaModel;
