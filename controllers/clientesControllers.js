const clientesModel = require("../models/clientesModel.js");

// Trae los Clientes
const traerClientes = async (req, res) => {
  try {
    const clientes = await clientesModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(clientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Trae un Cliente en particular
const traerUnCliente = async (req, res) => {
  try {
    const cliente = await clientesModel.findByPk(req.params.id);
    res.json(cliente);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = { traerClientes, traerUnCliente };
