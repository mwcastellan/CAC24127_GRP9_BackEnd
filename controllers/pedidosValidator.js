const { check } = require("express-validator");
const { validationResult } = require("express-validator");

const {
  existeUnEstado_Pedido,
} = require("../controllers/estado_pedidosControllers.js");
const { existeUnCliente } = require("../controllers/clientesControllers.js");
const { existeUnProducto } = require("../controllers/productosControllers.js");

// Valida Resultados
const ValidarResultado = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    return res.status(422).json({ message: err.array() });
  }
};

// Valida un Pedido
const ValidarPedido = [
  // Valida FECHA_COMPRA
  check("FECHA_COMPRA")
    .isDate()
    .withMessage("FECHA_COMPRA es incorrecta")
    .custom((value, { req }) => {
      const fechaHoy = new Date();
      const fechaAnt = new Date();
      var fechaIn = new Date(value);
      fechaAnt.setDate(fechaAnt.getDate() - 5); // menos 5 días
      if (fechaIn < fechaAnt || fechaIn > fechaHoy) {
        throw new Error(
          "FECHA_COMPRA debe estar entre " + fechaAnt + " y " + fechaHoy
        );
      }
      return true;
    }),
  // Valida IDCLIENTE
  check("IDCLIENTE")
    .isNumeric()
    .withMessage("IDCLIENTE es incorrecto")
    .custom(async (value) => {
      const token = await existeUnCliente(value);
      if (token) {
      } else {
        throw new Error("IDCLIENTE no existe");
      }
    }),
  // Valida IDPRODUCTO
  check("IDPRODUCTO")
    .isNumeric()
    .withMessage("IDPRODUCTO es incorrecto")
    .custom(async (value) => {
      const token = await existeUnProducto(value);
      if (token) {
      } else {
        throw new Error("IDPRODUCTO no existe");
      }
    }),
  // Valida IDESTADO
  check("IDESTADO")
    .isNumeric()
    .withMessage("IDESTADO es incorrecto")
    .custom(async (value) => {
      const token = await existeUnEstado_Pedido(value);
      if (token) {
      } else {
        throw new Error("IDESTADO no existe");
      }
    }),
  // Valida CANTIDAD
  check("CANTIDAD")
    .isNumeric()
    .withMessage("CANTIDAD es incorrecta")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("CANTIDAD debe ser mayor o igual a cero");
      }
      return true;
    }),
  // Valida PRECIO
  check("PRECIO")
    .isNumeric()
    .withMessage("PRECIO es incorrecto")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("PRECIO debe ser mayor o igual a cero");
      }
      return true;
    }),
  // Valida IMPORTE
  check("IMPORTE")
    .isNumeric()
    .withMessage("IMPORTE es incorrecto")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("IMPORTE debe ser mayor o igual a cero");
      }
      return true;
    }),

  (req, res, next) => {
    ValidarResultado(req, res, next);
    console.log(req.body);
    console.log(res.body);
  },
];

module.exports = ValidarPedido;
