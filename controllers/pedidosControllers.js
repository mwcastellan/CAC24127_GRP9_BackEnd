const pedidosModel = require("../models/pedidosModel.js");

// Trae los Pedidos
const TraerPedidos = async (req, res) => {
  try {
    const pedidos = await pedidosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(pedidos);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Trae los Pedidos Clientes
const TraerPedidosC = async (req, res) => {
  try {
    const pedidos = await pedidosModel.findAll({
      where: { IDCLIENTE: req.body.id },
      order: [["FECHA_COMPRA", "DESC"]],
    });
    res.json(pedidos);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Trae un Pedido en particular
const TraerUnPedido = async (req, res) => {
  try {
    const pedido = await pedidosModel.findByPk(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Crear un Pedido - Post
const CrearUnPedido = async (req, res) => {
  try {
    await pedidosModel.create(req.body); //({ message:
    res.body = res.json({ message: [{ msg: "Pedido creado correctamente" }] });
  } catch (error) {
    res.body = res.status(400).json({ message: [{ msg: error.message }] });
  }
};

// Actualizar un Pedido
const ActualizarUnPedido = async (req, res) => {
  try {
    await pedidosModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: [{ msg: "Pedido actualizado correctamente" }] });
    console.log(res.message);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Eliminar un Pedido
const BorrarUnPedido = async (req, res) => {
  try {
    await pedidosModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: [{ msg: "Pedido eliminado correctamente" }] });
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

module.exports = {
  TraerPedidos,
  TraerPedidosC,
  TraerUnPedido,
  CrearUnPedido,
  ActualizarUnPedido,
  BorrarUnPedido,
};
