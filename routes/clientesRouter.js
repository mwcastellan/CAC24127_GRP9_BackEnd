const express = require("express");
const router = express.Router();
const { traerClientes, traerUnCliente } = require("../controllers/clientesControllers.js");

// Segun Clientes
router.get("/", traerClientes);
router.get("/:id", traerUnCliente);

module.exports = router;
