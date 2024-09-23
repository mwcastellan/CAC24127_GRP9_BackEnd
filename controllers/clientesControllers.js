//-----------------------
// Clientes Controllers
//-----------------------
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  clientesModel,
  clientesModel_s,
} = require("../models/clientesModel.js");
const config = require("../config");

const {
  GrabarLogs_procesos,
} = require("../controllers/logs_procesosControllers.js");

//-----------------------------------------------------------
// Trae los Clientes
const TraerClientes = async (req, res) => {
  try {
    const clientes = await clientesModel_s.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(clientes);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};
//-----------------------------------------------------------
// Trae un Cliente en particular
const TraerUnCliente = async (req, res) => {
  try {
    const cliente = await clientesModel_s.findByPk(req.params.id);
    res.json(cliente);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};
//-----------------------------------------------------------
// Existe un Cliente en particular
async function ExisteUnCliente(id) {
  const token = await clientesModel.findOne({ where: { id } });
  if (token == null) {
    return false;
  } else {
    return true;
  }
}
//-----------------------------------------------------------
// Actualizar un Cliente
const ActualizarUnCliente = async (req, res) => {
  // Encriptar PASSWORD
  req.body.PASSWORD = bcryptjs.hashSync(req.body.PASSWORD, config.bcrypt.salt);
  try {
    await clientesModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: [{ msg: "Cliente actualizado correctamente" }] });
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Generar Token con payload
//-----------------------------------------------------------
const payload = {
  IDCLIENTE: 0,
  EMAIL: "",
};
function GenerarToken(payload) {
  return jwt.sign(payload, config.tokensJWT.secretKey, {
    expiresIn: config.tokensJWT.tokenExpiresIn,
  });
}
//-----------------------------------------------------------
// Login un Cliente - Post - Retorna Token con ID Cliente en Cookie: tpo-nodejs-bb
const LoginUnCliente = async (req, res) => {
  try {
    const cliente = await clientesModel.findOne({
      where: { EMAIL: req.body.EMAIL },
    });
    if (cliente == null)
      return res.status(400).json({
        message: [{ msg: "No existe Cliente/contraseña incorrecta" }],
      });
    const passwordValida = bcryptjs.compareSync(
      req.body.PASSWORD,
      cliente.dataValues.PASSWORD
    );
    if (!passwordValida)
      return res.status(400).json({
        message: [{ msg: "contraseña incorrecta/No existe Cliente" }],
      });
    // IDCLIENTE del Cliente y EMAIL del Cliente
    payload.IDCLIENTE = cliente.dataValues.id;
    payload.EMAIL = cliente.dataValues.EMAIL;
    token = GenerarToken(payload);

    GrabarLogs_procesos(
      "Login Cliente: Autotizado : " +
        payload.EMAIL +
        " - IDCLIENTE : " +
        payload.IDCLIENTE +
        " - token: " +
        token
    );

    const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hora
    res
      // Genera una Cookie
      .cookie("tpo_nodejs_bb", token, {
        secure: true,
        httpOnly: true,
        expires: expiryDate,
        partitioned: true,
        sameSite: "None",
      })
      .status(200)
      .json({ message: [{ msg: "Login correcto" }] });
  } catch (error) {
    res.json({ message: [{ msg: "Login incorrecto: " + error.message }] });
  }
};

//-----------------------------------------------------------
// Registrar un Cliente - Post
const RegistrarUnCliente = async (req, res) => {
  // Encriptar PASSWORD
  req.body.PASSWORD = bcryptjs.hashSync(req.body.PASSWORD, config.bcrypt.salt);
  try {
    const cliente = await clientesModel.create(req.body);
    // IDCLIENTE del Cliente y EMAIL del Cliente
    payload.IDCLIENTE = cliente.id;
    payload.EMAIL = cliente.EMAIL;
    token = GenerarToken(payload);

    GrabarLogs_procesos(
      "Registrar Cliente: Autotizado : " +
        payload.EMAIL +
        " - IDCLIENTE : " +
        payload.IDCLIENTE +
        " - token: " +
        token
    );

    const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hora
    res
      // Genera una Cookie
      .cookie("tpo_nodejs_bb", token, {
        secure: true,
        httpOnly: true,
        expires: expiryDate,
        partitioned: true,
        sameSite: "None",
      })
      .status(200)
      .json({ message: [{ msg: "Cliente registrado correctamente" }] });
  } catch (error) {
    res.json({
      message: [
        { msg: "Cliente no registrado correctamente: " + error.message },
      ],
    });
  }
};
//-----------------------------------------------------------

module.exports = {
  TraerClientes,
  TraerUnCliente,
  ExisteUnCliente,
  LoginUnCliente,
  RegistrarUnCliente,
  ActualizarUnCliente,
};
