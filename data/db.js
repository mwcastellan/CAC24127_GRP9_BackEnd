const pjson = require('../package.json');
const msg_cabecera = `Sistema: ${pjson.name}`;

const {Sequelize} = require ("sequelize")

const sBD = "mcastellan_grp9"
const sUser = "363082_grp9"
const sPassword = "CaC24127GRP9"
const sHost =  "mysql-mcastellan.alwaysdata.net"
const db = new Sequelize (sBD,sUser,sPassword,{
host : sHost,
dialect:"mysql"
})
console.log(`${msg_cabecera} - Base de Datos :  ${sHost} - ${sBD}`);
module.exports = db
