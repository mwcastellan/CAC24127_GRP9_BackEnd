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

module.exports = { traerClientes };
