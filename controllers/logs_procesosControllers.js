//-----------------------
// logs_procesos Controllers
//-----------------------
const {
  logs_procesosModel,
  logs_procesosCModel,
} = require("../models/logs_procesosModel.js");
// Grabar un logs_proceso
const GrabarLogs_procesos = async (imensaje) => {
  const logs_procesos = await logs_procesosModel.create({ MENSAJE: imensaje });
};

// Trae logs de procesos
const TraerLogs_procesos = async (req, res) => {
  try {
    const logs_procesos = await logs_procesosCModel.findAll({
      order: [["ID", "DESC"]],
    });
    res.json(logs_procesos);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

module.exports = { GrabarLogs_procesos, TraerLogs_procesos };
