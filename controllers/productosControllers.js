//-----------------------
// Productos Controllers
//-----------------------
const productosModel = require("../models/productosModel.js");

// Trae los Productos
const TraerProductos = async (req, res) => {
  try {
    const productos = await productosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(productos);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Trae un Producto en particular
const TraerUnProducto = async (req, res) => {
  try {
    const producto = await productosModel.findByPk(req.params.id);
    res.json(producto);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Existe un Producto en particular
async function ExisteUnProducto(id) {
  const token = await productosModel.findOne({ where: { id } });
  if (token == null) {
    return false;
  } else {
    return true;
  }
}

module.exports = { TraerProductos, TraerUnProducto, ExisteUnProducto };
