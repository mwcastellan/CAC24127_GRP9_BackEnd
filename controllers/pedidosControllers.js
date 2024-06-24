const pedidosModel = require("../models/pedidosModel.js");

// Trae los Pedidos
const traerPedidos = async (req, res) => {
  try {
    const pedidos = await pedidosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(pedidos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Trae un Pedido en particular
const traerUnPedido = async (req, res) => {
  try {
    const pedido = await pedidosModel.findByPk(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Crear un Pedido - Post
const crearUnPedido = async (req, res) => {
  try {
    await pedidosModel.create(req.body);
    res.body = res.json({ message: "Pedido creado correctamente" });
  } catch (error) {
    res.body = res.status(400).json({ message: error.message });
  }
};

module.exports = { traerPedidos, traerUnPedido, crearUnPedido };
