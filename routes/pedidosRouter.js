const express = require("express");
const router = express.Router();
const {
  traerPedidos,
  traerUnPedido,
} = require("../controllers/pedidosControllers.js");

// Segun Pedidos es Todos o Individual
router.get("/", traerPedidos);
router.get("/:id", traerUnPedido);

// Faltan estos:
//router.post ("/",crearPedido)
//router.put ("/:id",actualizarPedido)
//router.delete ("/:id",borrarPedido)

module.exports = router;
