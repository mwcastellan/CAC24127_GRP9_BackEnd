//-----------------------
// Subcategoria Controllers
//-----------------------
const subcategoriaModel = require("../models/subcategoriaModel.js");

// Trae las subcategorias
const TraerSubcategoria = async (req, res) => {
  try {
    const subcategoria = await subcategoriaModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(subcategoria);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

module.exports = { TraerSubcategoria };
