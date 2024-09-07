const express = require("express");
const app = express();
const router = express.Router();

const {
  TraerEstado_Pedidos,
  TraerUnEstado_Pedido,
} = require("../controllers/estado_pedidosControllers.js");

// Segun Estado_pedidos
router.get("/", TraerEstado_Pedidos);
router.get("/:id", TraerUnEstado_Pedido);

module.exports = router;
