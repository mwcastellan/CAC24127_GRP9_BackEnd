const express = require("express");
const router = express.Router();
const {
  traerEstado_Pedidos, traerUnEstado_Pedido
} = require("../controllers/estado_pedidosControllers.js");

// Segun Estado_pedidos
router.get("/", traerEstado_Pedidos);
router.get("/:id", traerUnEstado_Pedido);

module.exports = router;
