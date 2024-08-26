const express = require("express");
const router = express.Router();
const {
  traerClientes,
  traerUnCliente,
  crearUnCliente,
  actualizarUnCliente,
} = require("../controllers/clientesControllers.js");

const ValidaCliente = require("../controllers/clientesValidator.js");
// Segun Clientes
router.get("/", traerClientes);
router.get("/:id", traerUnCliente);
router.post("/",ValidaCliente, crearUnCliente);
router.put("/:id",ValidaCliente, actualizarUnCliente);

module.exports = router;
