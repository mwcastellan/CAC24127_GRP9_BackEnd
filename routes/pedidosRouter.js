const express = require("express");
const router = express.Router();
const {
  traerPedidos,
  traerUnPedido,
  crearUnPedido,
  actualizarUnPedido,
  borrarUnPedido,
} = require("../controllers/pedidosControllers.js");

const ValidaPedido = require("../controllers/pedidosValidator.js");

// Segun Pedidos es Todos o Individual
router.get("/", traerPedidos);
router.get("/:id", traerUnPedido);
router.post("/", ValidaPedido, crearUnPedido);
router.put("/:id", ValidaPedido, actualizarUnPedido);
router.delete("/:id", borrarUnPedido);

module.exports = router;
