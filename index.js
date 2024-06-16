const express = require ("express")
const app = express()
const port = 3030
const cors = require("cors")
const pedidosRouter = require("./routes/pedidosRouter.js")
const db = require ("./data/db.js")
const pjson = require('./package.json');
const msg_cabecera = `Sistema: ${pjson.name}`

app.use(cors())
app.use (express.json()) 

/*    pedido http/ruta - funcion = controler */
app.get ("/",(req,res)=>{
    res.send(`${msg_cabecera} - Estás en el Home`)
})

app.use ("/pedidos",pedidosRouter)

// conexion a la base de datos
//const conexiondb = async ()=>{
//    try {
//       await db.authenticate()
//       console.log(`${msg_cabecera} - Conexion ok a la base de datos`);
//    } catch (error) {
//       console.log(`${msg_cabecera} - El error es : ${error}`)
//    }
//   }

   app.listen(port,()=>{
 //      conexiondb()
       console.log(`${msg_cabecera} - Server OK en el puerto ${port}`);
   })
