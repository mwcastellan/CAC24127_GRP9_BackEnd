const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  clientesModel,
  clientesModel_s,
} = require("../models/clientesModel.js");
const config = require("../config");

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
// Trae un Cliente en particular
const TraerUnCliente = async (req, res) => {
  try {
    const cliente = await clientesModel_s.findByPk(req.params.id);
    res.json(cliente);
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

// Existe un Cliente en particular
async function ExisteUnCliente(id) {
  const token = await clientesModel.findOne({ where: { id } });
  if (token == null) {
    return false;
  } else {
    return true;
  }
}

// Registrar un Cliente - Post
const RegistrarUnCliente = async (req, res) => {
  // Encriptar PASSWORD
  req.body.PASSWORD = bcryptjs.hashSync(req.body.PASSWORD, config.bcrypt.salt);
  try {
    await clientesModel.create(req.body); //({ message:
    res.body = res.json({
      message: [{ msg: "Cliente registrado correctamente" }],
    });
  } catch (error) {
    res.body = res.status(400).json({ message: [{ msg: error.message }] });
  }
};

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

    // Armar el Token y lo guarda en una cookie - JWT
    const token = jwt.sign(
      // ID del Cliente y EMAIL del Cliente
      { id: cliente.dataValues.id, EMAIL: cliente.dataValues.EMAIL },
      config.tokensJWT.secretKey,
      { expiresIn: config.tokensJWT.tokenExpiresIn }
    );
    console.log(
      "Login Cliente: Autotizado : " +
        cliente.dataValues.EMAIL +
        " - id : " +
        cliente.dataValues.id +
        " - token: " +
        token
    );
    res
      // Genera una Cookie
      //   httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production",
      .cookie("tpo_nodejs_bb", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: [{ msg: "login correcto" }] });
  } catch (error) {
    res.json({ message: [{ msg: error.message }] });
  }
};

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

module.exports = {
  TraerClientes,
  TraerUnCliente,
  ExisteUnCliente,
  RegistrarUnCliente,
  LoginUnCliente,
  ActualizarUnCliente,
};
