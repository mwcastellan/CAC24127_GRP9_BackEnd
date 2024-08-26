const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const clientesModel = db.define("clientes", {
  EMAIL: { type: DataTypes.STRING },
  APELLIDO: { type: DataTypes.STRING },
  NOMBRE: { type: DataTypes.STRING },
  DIRECCION: { type: DataTypes.STRING },
  PASSWORD: { type: DataTypes.STRING },
});

module.exports = clientesModel;
