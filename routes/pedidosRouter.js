const express = require("express");
const router = express.Router();
const {
  traerPedidos,
  traerUnPedido,
} = require("../controllers/pedidosControllers.js");

// Segun Pedidos es Todos o Individual
router.get("/", traerPedidos);
router.get("/:id", traerUnPedido);

//router.get ("/",traerPosteos)
//router.get ("/:id",traerUnPosteo)
//router.post ("/",crearPosteo)
//router.put ("/:id",actualizarPosteo)
//router.delete ("/:id",borrarPosteo)

module.exports = router;
