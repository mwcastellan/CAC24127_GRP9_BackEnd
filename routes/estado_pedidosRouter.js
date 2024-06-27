const express = require("express");
const router = express.Router();
const {
  traerEstado_Pedidos,
} = require("../controllers/estado_pedidosControllers.js");

// Segun Estado_pedidos
router.get("/", traerEstado_Pedidos);

module.exports = router;
