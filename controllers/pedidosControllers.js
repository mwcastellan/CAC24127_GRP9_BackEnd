//-----------------------
// Pedidos Controllers
//-----------------------
const pedidosModel = require("../models/pedidosModel.js");

const {
  GrabarLogs_procesos,
} = require("../controllers/logs_procesosControllers.js");

// Trae los Pedidos Clientes
const TraerPedidos = async (req, res) => {
  try {
    GrabarLogs_procesos(
      "TraerPedidos - EMAIL : " +
        req.body.EMAIL +
        " - IDCLIENTE : " +
        req.body.IDCLIENTE
    );
    const pedidos = await pedidosModel.findAll({
      where: { IDCLIENTE: req.body.IDCLIENTE },
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
    GrabarLogs_procesos(
      "TraerUnPedido - EMAIL : " +
        req.body.EMAIL +
        " - IDCLIENTE : " +
        req.body.IDCLIENTE
    );
    const pedido = await pedidosModel.findByPk(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Crear un Pedido - Post
const CrearUnPedido = async (req, res) => {
  try {
    GrabarLogs_procesos(
      "CrearUnpedido - EMAIL : " +
        req.body.EMAIL +
        " - IDCLIENTE : " +
        req.body.IDCLIENTE
    );
    await pedidosModel.create(req.body);
    res.body = res.json({ message: [{ msg: "Pedido creado correctamente" }] });
  } catch (error) {
    res.body = res.status(400).json({ message: [{ msg: error.message }] });
  }
};

// Actualizar un Pedido
const ActualizarUnPedido = async (req, res) => {
  try {
    await pedi;
    GrabarLogs_procesos(
      "ActualizarUnPedido - EMAIL : " +
        req.body.EMAIL +
        " - IDCLIENTE : " +
        req.body.IDCLIENTE
    );
    dosModel.update(req.body, {
      where: { id: req.params.id, idcliente: req.body.IDCLIENTE },
    });
    res.json({ message: [{ msg: "Pedido actualizado correctamente" }] });
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Eliminar un Pedido
const BorrarUnPedido = async (req, res) => {
  try {
    GrabarLogs_procesos(
      "BorrarUnPedido - EMAIL : " +
        req.body.EMAIL +
        " - IDCLIENTE : " +
        req.body.IDCLIENTE
    );
    await pedidosModel.destroy({
      where: { id: req.params.id, idcliente: req.body.IDCLIENTE },
    });
    res.json({ message: [{ msg: "Pedido eliminado correctamente" }] });
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

module.exports = {
  TraerPedidos,
  TraerUnPedido,
  CrearUnPedido,
  ActualizarUnPedido,
  BorrarUnPedido,
};
