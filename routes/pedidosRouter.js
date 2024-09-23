//-----------------------
// Pedidos Router
//-----------------------
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const {
  TraerPedidos,
  TraerUnPedido,
  CrearUnPedido,
  ActualizarUnPedido,
  BorrarUnPedido,
} = require("../controllers/pedidosControllers.js");

const config = require("../config");
const ValidarPedido = require("../controllers/pedidosValidator.js");

fechahora = new Date();

//---------------------------------------------------------------------------------
// Autorizar Cliente -- Valida con datos en la cookie tpo-nodejs-bb
const AutorizarClientes = (req, res, next) => {
  const Grabarlogs_Procesos = require("../controllers/logs_procesosControllers.js");
  try {
    Grabarlogs_Procesos("Autorizar Cliente: 1- req.cookies: ");
    // Nombre de la cookie: tpo_nodejs_bb
    const token = req.cookies.tpo_nodejs_bb; 
    try {
      Grabarlogs_Procesos("Autorizar Cliente: 2- Token : " + token);
      const data = jwt.verify(token, config.tokensJWT.secretKey);
      req.body.IDCLIENTE = data.IDCLIENTE;
      req.body.EMAIL = data.EMAIL;
      Grabarlogs_Procesos(
        "Autorizar Cliente: 3- Autotizado : " +
          req.body.EMAIL +
          " - IDCLIENTE : " +
          req.body.IDCLIENTE
      );
      next();
    } catch (error) {
      Grabarlogs_Procesos("Autorizar Cliente: 4- Error jwt.verify : " + error);
      res.body = res.status(419).json({ message: [{ msg: error.message }] });
    }
  } catch (error) {
    Grabarlogs_Procesos("Autorizar Cliente: 5- Error req.cookies : " + error);
    res.body = res.status(420).json({ message: [{ msg: error.message }] });
  }
};
//---------------------------------------------------------------------------------

// Segun Pedidos es Todos o Individual
router.get("/ver", AutorizarClientes, TraerPedidos);
router.get("/ver/:id", AutorizarClientes, TraerUnPedido);
router.post("/crear", AutorizarClientes, ValidarPedido, CrearUnPedido);
router.put(
  "/actualizar/:id",
  AutorizarClientes,
  ValidarPedido,
  ActualizarUnPedido
);
router.delete("/borrar/:id", AutorizarClientes, BorrarUnPedido);

module.exports = router;
