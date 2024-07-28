const pedidosModel = require("../models/pedidosModel.js");
const express = require("express");
const bodyParser = require("body-parser"); // middleware para manejar solicitudes
const { check, validationResult } = require("express-validator");
const app = express();

app.use(bodyParser.json()); // parsear datos en formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // toma los datos en formato URL-encoded y los configura

// Trae los Pedidos
const traerPedidos = async (req, res) => {
  try {
    const pedidos = await pedidosModel.findAll({
      order: [["ID", "ASC"]],
    });
    res.json(pedidos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Trae un Pedido en particular
const traerUnPedido = async (req, res) => {
  try {
    const pedido = await pedidosModel.findByPk(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Crear un Pedido - Post
const crearUnPedido = async (req, res) => {
  try {
    await pedidosModel.create(req.body);
    res.body = res.json({ message: "Pedido creado correctamente" });
  } catch (error) {
    res.body = res.status(400).json({ message: error.message });
  }
};

// Actualizar un Pedido
const actualizarUnPedido = async (req, res) => {
  try {
    await pedidosModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Pedido actualizado correctamente" });
    console.log(res.message);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Eliminar un Pedido
const borrarUnPedido = async (req, res) => {
  try {
    await pedidosModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Pedido eliminado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  traerPedidos,
  traerUnPedido,
  crearUnPedido,
  actualizarUnPedido,
  borrarUnPedido,
};
