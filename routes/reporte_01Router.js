const express = require ("express")
const router = express.Router()
const {traerReporte_01} = require("../controllers/reporte_01Controllers.js")

// Listar todo
router.get ("/",traerReporte_01) 

module.exports = router
