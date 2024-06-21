const express = require("express");
const router = express.Router();
const {
  traerPedidos,
  traerUnPedido,
  crearUnPedido,
} = require("../controllers/pedidosControllers.js");

// Segun Pedidos es Todos o Individual
router.get("/", traerPedidos);
router.get("/:id", traerUnPedido);
router.post("/",crearUnPedido);

// Faltan estos:
//router.put ("/:id",actualizarPedido) -- (IDPRODUCTO,	CANTIDAD,	PRECIO,	IMPORTE)
//router.delete ("/:id",borrarPedido)

module.exports = router;
