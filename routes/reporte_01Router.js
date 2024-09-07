const express = require("express");
const app = express();
const router = express.Router();

const { TraerReporte_01 } = require("../controllers/reporte_01Controllers.js");

// Listar todo
router.get("/", TraerReporte_01);

module.exports = router;
