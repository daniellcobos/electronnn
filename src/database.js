const Sequelize = require('sequelize')

const sequelize = new Sequelize('test','danielcobos','zekuensia123',{
    dialect:'postgres',
    host: 'localhost',
})
module.exports = sequelize