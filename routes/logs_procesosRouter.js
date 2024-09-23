//-----------------------
// Logs_Procesos Router
//-----------------------
const express = require("express");
const router = express.Router();

const {
  TraerLogs_procesos,
} = require("../controllers/logs_procesosControllers.js");

// Segun Pedidos es Todos o Individual
router.get("/", TraerLogs_procesos);

module.exports = router;
