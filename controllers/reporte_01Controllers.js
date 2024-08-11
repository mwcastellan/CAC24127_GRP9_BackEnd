const reporte_01Model = require("../models/reporte_01Model.js");

// Trae los Productos Ordenados -> by idcategoria asc, idsubcategoria asc, id asc
const traerReporte_01 = async (req, res) => {
  try {
    const productos = await reporte_01Model.findAll({
      order: [
        ["idcategoria", "ASC"],
        ["idsubcategoria", "ASC"],
        ["ID", "ASC"],
      ],
    });
    res.json(productos);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

module.exports = { traerReporte_01 };
