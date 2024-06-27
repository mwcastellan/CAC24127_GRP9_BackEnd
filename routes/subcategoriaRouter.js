const express = require("express");
const router = express.Router();
const {
  traerSubcategoria,
} = require("../controllers/subcategoriaControllers.js");

// Segun Subcategoria
router.get("/", traerSubcategoria);

module.exports = router;
