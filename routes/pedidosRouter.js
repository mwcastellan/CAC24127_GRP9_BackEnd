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
  try {
    console.log("===================================");
    console.log("Autorizar Cliente: " + fechahora);
    console.log("===================================");
    console.log("Autorizar Cliente: 1- req.cookies: ");
    const token = req.cookies.tpo_nodejs_bb; // Nombre de la cookie
    try {
      console.log("Autorizar Cliente: 2- Token : " + token);
      const data = jwt.verify(token, config.tokensJWT.secretKey);
      req.body.IDCLIENTE = data.IDCLIENTE;
      req.body.EMAIL = data.EMAIL;
      console.log(
        "Autorizar Cliente: 3- Autotizado : " +
          req.body.EMAIL +
          " - IDCLIENTE : " +
          req.body.IDCLIENTE
      );
      console.log("===================================");
      next();
    } catch (error) {
      console.log("Autorizar Cliente: 4- Error jwt.verify : " + error);
      res.sendStatus(419);
    }
  } catch (error) {
    console.log("Autorizar Cliente: 5- Error req.cookies : " + error);
    res.sendStatus(420);
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
