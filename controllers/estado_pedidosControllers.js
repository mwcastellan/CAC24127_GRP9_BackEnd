const estado_pedidosModel = require("../models/estado_pedidosModel.js");

// Trae los estados pedidos
const traerEstado_Pedidos = async (req, res) => {
  try {
    const estado_pedidos = await estado_pedidosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(estado_pedidos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { traerEstado_Pedidos };
