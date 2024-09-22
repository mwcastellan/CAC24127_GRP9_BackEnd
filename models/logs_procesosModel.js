//-----------------------
// Logs_procesos Model
//-----------------------
const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const logs_procesosModel = db.define("logs_procesos", {
  MENSAJE: { type: DataTypes.STRING },
});

module.exports = { logs_procesosModel };
