

const traerPedidos = (req,res) =>{
res.send ("Busco los pedidos de la Base de Datos y los envio en .JSON")
}

const traerUnPedido = (req,res) =>{
    res.send ("Busco el pedido de la Base de Datos y lo envio en .JSON")
    }

    module.exports = {traerPedidos,traerUnPedido}