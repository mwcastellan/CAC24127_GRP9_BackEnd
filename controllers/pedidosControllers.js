

const traerPedidos = (req,res) =>{
res.send ("busco los posteos de la BD y los envio en .JSON")
}

const traerUnPedido = (req,res) =>{
    res.send ("busco el posteo de la BD y lo envio en .JSON")
    }

    module.exports = {traerPedidos,traerUnPedido}