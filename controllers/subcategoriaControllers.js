const subcategoriaModel = require("../models/subcategoriaModel.js");

// Trae las subcategorias
const traerSubcategoria = async (req, res) => {
  try {
    const subcategoria = await subcategoriaModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(subcategoria);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { traerSubcategoria };
