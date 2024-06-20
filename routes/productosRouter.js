const express = require("express");
const router = express.Router();
const {
  traerProductos,
  traerUnProducto,
} = require("../controllers/productosControllers.js");

// Segun Pedidos es Todos o Individual
router.get("/", traerProductos);
router.get("/:id", traerUnProducto);

module.exports = router;
