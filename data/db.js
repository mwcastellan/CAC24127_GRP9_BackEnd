
const {Sequelize} = require ("sequelize")

/* Bases de Datos em www.alwaysdata */
const sBaseDatos = "mcastellan_grp9"
const sUsuario   = "363082_grp9"
const sContraseña= "CaC24127GRP9"
const sServer    = "mysql-mcastellan.alwaysdata.net"
const sPort      = 3306
const db = new Sequelize (sBaseDatos,sUsuario,sContraseña,{
host : sServer,
dialect:"mysql",
dialectModule: require('mysql2'),
port:sPort
})
module.exports = db
