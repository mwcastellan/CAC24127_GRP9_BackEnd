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

// Crear un Cliente - Post
const crearUnCliente = async (req, res) => {
  try {
    await clientesModel.create(req.body); //({ message:
    res.body = res.json({ message: [{ msg: "Cliente creado correctamente" }] });
  } catch (error) {
    res.body = res.status(400).json({ message: [{ msg: error.message }] });
  }
};

// Actualizar un Cliente
const actualizarUnCliente = async (req, res) => {
  try {
    await clientesModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: [{ msg: "Cliente actualizado correctamente" }] });
    console.log(res.message);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

module.exports = {
  traerClientes,
  traerUnCliente,
  existeUnCliente,
  crearUnCliente,
  actualizarUnCliente,
};
