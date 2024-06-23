const pedidosModel = require("../models/pedidosModel.js");

// Trae los Pedidos
const traerPedidos = async (req, res) => {
  try {
    const pedidos = await pedidosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(pedidos);
  } catch (error) {
    return res.status(400).json({ message: `Error Traer todos :${error.message}` });
  }
};

// Trae un Pedido en particular
const traerUnPedido = async (req, res) => {
  try {
    const pedido = await pedidosModel.findByPk(req.params.id);
    res.json(pedido);
  } catch (error) {
    return res.status(400).json({ message: `Error Traer :${error.message}` });
  }
};

// Crear un Pedido - Post
const crearUnPedido = async (req, res) => {
  try {
    await pedidosModel.create(req.body);
    res.json({ message: "Pedido creado correctamente" });
  } catch (error) {
    return res.status(400).json({ message: `Error Crear :${error.message}` });
  }
};

module.exports = { traerPedidos, traerUnPedido, crearUnPedido };
