const productosModel = require("../models/productosModel.js");

// Trae los Productos
const traerProductos = async (req, res) => {
  try {
    const productos = await productosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(productos);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Trae un Producto en particular
const traerUnProducto = async (req, res) => {
  try {
    const producto = await productosModel.findByPk(req.params.id);
    res.json(producto);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = { traerProductos, traerUnProducto };
