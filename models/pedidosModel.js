const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const pedidosModel = db.define ("pedidos",{
    titulo:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING}
})

module.exports = posteosModel