const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")

const pedidosModel = db.define ("pedidos",{
    ID : {type:DataTypes.BIGINT},
    FECHA_COMPRA : {type:DataTypes.DATE},
    IDCLIENTE : {type:DataTypes.BIGINT},
    IDPRODUCTO : {type:DataTypes.BIGINT},
    CANTIDAD : {type:DataTypes.BIGINT},
    PRECIO : {type:DataTypes.DOUBLE},
    IMPORTE :  {type:DataTypes.DOUBLE},
    IDESTADO :{type:DataTypes.BIGINT}
})

module.exports = pedidosModel