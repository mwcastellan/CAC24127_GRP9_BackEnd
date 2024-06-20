const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");
const pedidosRouter = require("./routes/pedidosRouter.js");
const productosRouter = require("./routes/productosRouter.js");
const reporte_01Router = require("./routes/reporte_01Router.js");
const pjson = require("./package.json");
const msg_cabecera = `Sistema: ${pjson.name}`;
const db = require("./data/db.js");

app.use(cors());
app.use(express.json());

// Ingreso a la raiz solamente
app.get("/", (req, res) => {
  res.send(`${msg_cabecera} - Estás en el Home`);
});
// Ingreso a Pedidos
app.use("/pedidos", pedidosRouter);
// Ingreso a Productos
app.use("/productos", productosRouter);
// Ingreso a Productos Ordenados
app.use("/reporte_01", reporte_01Router);

// Conexion a la Base de Datos
const conexiondb = async () => {
  try {
    await db.authenticate();
    console.log(`Conexion OK a la Base de Datos`);
  } catch (error) {
    console.log(`El Error es : ${error}`);
  }
};

app.listen(port, () => {
  conexiondb();
  console.log(`Server OK en el Puerto ${port}`);
});
