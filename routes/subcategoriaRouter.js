const express = require("express");
const app = express();
const router = express.Router();

const {
  TraerSubcategoria,
} = require("../controllers/subcategoriaControllers.js");

// Segun Subcategoria
router.get("/", TraerSubcategoria);

module.exports = router;
