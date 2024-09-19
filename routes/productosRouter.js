//-----------------------
// Productos Router
//-----------------------
const express = require("express");
const router = express.Router();

const {
  TraerProductos,
  TraerUnProducto,
} = require("../controllers/productosControllers.js");

// Segun Pedidos es Todos o Individual
router.get("/", TraerProductos);
router.get("/:id", TraerUnProducto);

module.exports = router;
