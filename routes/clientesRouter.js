const express = require("express");
const router = express.Router();
const { traerClientes } = require("../controllers/clientesControllers.js");

// Segun Clientes
router.get("/", traerClientes);

module.exports = router;
