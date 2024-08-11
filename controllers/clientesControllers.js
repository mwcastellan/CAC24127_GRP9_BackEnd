const clientesModel = require("../models/clientesModel.js");

// Trae los Clientes
const traerClientes = async (req, res) => {
  try {
    const clientes = await clientesModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(clientes);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};
// Trae un Cliente en particular
const traerUnCliente = async (req, res) => {
  try {
    const cliente = await clientesModel.findByPk(req.params.id);
    res.json(cliente);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Existe un Cliente en particular
async function existeUnCliente(id) {
  const token = await clientesModel.findOne({ where: { id } });
  if (token == null) {
    return false;
  } else {
    return true;
  }
}

module.exports = { traerClientes, traerUnCliente, existeUnCliente };
