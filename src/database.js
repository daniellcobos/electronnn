const Sequelize = require('sequelize')

 const sequelize = new Sequelize('test','danielcobos','zekuensia123',{
      dialect:'postgres',
       host: 'localhost',
})

//let sequelize = new Sequelize('test','danielcobos','zekuensia123',{
 //   dialect:'postgres',
 //   host: 'localhost',
//})


const authDatabase = (base,user,pass,host) => {
    sequelize.connectionManager.config.database = base
    sequelize.connectionManager.config.username = user
    sequelize.connectionManager.config.password = pass
    sequelize.connectionManager.config.host = host
    sequelize.authenticate().then('conexion exitosa').catch(err => console.log(err))  
    sequelize.sync({force : true})
}


exports.sequelize = sequelize;
exports.authDatabase = authDatabase;
