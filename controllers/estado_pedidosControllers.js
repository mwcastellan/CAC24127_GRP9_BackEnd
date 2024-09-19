//-----------------------
// Estado_pedidos Controllers
//-----------------------
const estado_pedidosModel = require("../models/estado_pedidosModel.js");

// Trae los estados pedidos
const TraerEstado_Pedidos = async (req, res) => {
  try {
    const estado_pedidos = await estado_pedidosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(estado_pedidos);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};
// Trae un Estado_Pedido en particular
const TraerUnEstado_Pedido = async (req, res) => {
  try {
    const estado_pedido = await estado_pedidosModel.findByPk(req.params.id);
    res.json(estado_pedido);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Existe un Estado_Pedido en particular
async function ExisteUnEstado_Pedido(id) {
  const token = await estado_pedidosModel.findOne({ where: { id } });
  if (token == null) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  TraerEstado_Pedidos,
  TraerUnEstado_Pedido,
  ExisteUnEstado_Pedido,
};
