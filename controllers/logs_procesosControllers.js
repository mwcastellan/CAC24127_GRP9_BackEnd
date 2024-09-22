//-----------------------
// logs_procesos Controllers
//-----------------------
const { logs_procesosModel } = require("../models/logs_procesosModel.js");
// Grabar un logs_proceso
const GrabarLogs_procesos = async (imensaje) => {
  const logs_proceso = await logs_procesosModel.create({ MENSAJE: imensaje });
};

module.exports = GrabarLogs_procesos;
