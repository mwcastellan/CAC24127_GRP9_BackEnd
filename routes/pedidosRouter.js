const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");

const {
  TraerPedidos,
  TraerPedidosC,
  TraerUnPedido,
  CrearUnPedido,
  ActualizarUnPedido,
  BorrarUnPedido,
} = require("../controllers/pedidosControllers.js");

const config = require("../config");
const ValidarPedido = require("../controllers/pedidosValidator.js");

// Autorizar Cliente -- Valida con datos en la cookie tpo-nodejs-bb
const AutorizarClientes = (req, res, next) => {
  try {
    console.log("Autorizar Cliente: 1- req.cookies: ");
    console.log(req.cookies);
    const token = req.cookies.tpo_nodejs_bb; // Nombre de la cookie
    try {
      console.log("Autorizar Cliente: 2- Token : " + token);
      const data = jwt.verify(token, config.tokensJWT.secretKey);
      req.body.id = data.id;
      req.body.EMAIL = data.EMAIL;
      console.log(
        "Autorizar Cliente: 3- Autotizado : " +
          req.body.EMAIL +
          " - id : " +
          req.body.id
      );
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

// Segun Pedidos es Todos o Individual
router.get("/clientes", AutorizarClientes, TraerPedidosC);
router.get("/", TraerPedidos);
router.get("/:id", TraerUnPedido);
router.post("/", ValidarPedido, CrearUnPedido);
router.put("/:id", ValidarPedido, ActualizarUnPedido);
router.delete("/:id", BorrarUnPedido);

module.exports = router;
