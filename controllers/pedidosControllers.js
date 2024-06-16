const pjson = require('../package.json');
const msg_cabecera = `Sistema: ${pjson.name}`;

const traerPedidos = (req,res) =>{
    res.send (`${msg_cabecera} - Busco los pedidos de la BD y los envio en .JSON`)
    }
    
const traerUnPedido = (req,res) =>{
    res.send (`${msg_cabecera} - Busco el posteo de la BD y lo envio en .JSON`)
    }
    
module.exports = {traerPedidos,traerUnPedido}
