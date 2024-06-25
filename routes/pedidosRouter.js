const express = require("express");
const router = express.Router();
const {
  traerPedidos,
  traerUnPedido,
  crearUnPedido,
  actualizarUnPedido,
  borrarUnPedido,
} = require("../controllers/pedidosControllers.js");

// Segun Pedidos es Todos o Individual
router.get("/", traerPedidos);
router.get("/:id", traerUnPedido);
router.post("/", crearUnPedido);
router.put("/:id", actualizarUnPedido);
router.delete("/:id", borrarUnPedido);

module.exports = router;
