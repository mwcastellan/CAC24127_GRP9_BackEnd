//-----------------------
// Clientes Router
//-----------------------
const express = require("express");
const router = express.Router();

const {
  TraerClientes,
  TraerUnCliente,
  RegistrarUnCliente,
  LoginUnCliente,
  ActualizarUnCliente,
} = require("../controllers/clientesControllers.js");

const ValidarCliente = require("../controllers/clientesValidator.js");

// Segun Clientes
router.post("/login", LoginUnCliente);
router.get("/", TraerClientes);
router.get("/:id", TraerUnCliente);
router.post("/registrar", ValidarCliente, RegistrarUnCliente);
router.put("/:id", ValidarCliente, ActualizarUnCliente);

module.exports = router;
