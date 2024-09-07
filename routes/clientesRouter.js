const express = require("express");
const app = express();
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
router.get("/", TraerClientes);
router.get("/:id", TraerUnCliente);
router.post("/", ValidarCliente, RegistrarUnCliente);
router.post("/login", LoginUnCliente);
router.put("/:id", ValidarCliente, ActualizarUnCliente);

module.exports = router;
