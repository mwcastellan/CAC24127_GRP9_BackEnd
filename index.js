const express = require("express");
const app = express();
const port = 3030;
const pedidosRouter = require("./routes/pedidosRouter.js");
const db = require("./data/db.js");
const pjson = require("./package.json");
const msg_cabecera = `Sistema: ${pjson.name}`;

app.use(express.json());

// Ingreso a la raiz solamente
app.get("/", (req, res) => {
  res.send(`${msg_cabecera} - Estás en el Home`);
});
// Ingreso a Pedidos
app.use("/pedidos", pedidosRouter);
// Conectando a Puerto
app.listen(port,()=>{
  console.log(`Server ok en el puerto ${port}`);
})
