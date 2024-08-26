const config = require("../config");
const StrongPassword = config.StrongPassword;
const { check, validationResult } = require("express-validator");

// Valida Resultados
const ValidarResultado = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    return res.status(422).json({ message: err.array() });
  }
};

// Valida un Cliente
const ValidarCliente = [
  // Valida EMAIL
  check("EMAIL").isEmail().withMessage("EMAIL es incorrecto"),
  // Valida APELLIDO
  check("APELLIDO").isAlphanumeric().withMessage("APELLIDO es incorrecto"),
  // Valida NOMBRE
  check("NOMBRE").isAlphanumeric().withMessage("NOMBRE es incorrecto"),
  // Valida DIRECCION
  check("DIRECCION").isAlphanumeric().withMessage("DIRECCCION es incorrecta"),
  // Valida PASSWORD
  check("PASSWORD")
    .isStrongPassword(StrongPassword)
    .withMessage("PASSWORD es incorrecto"),
  (req, res, next) => {
    ValidarResultado(req, res, next);
  },
];

module.exports = ValidarCliente;
