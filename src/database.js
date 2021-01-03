const Sequelize = require('sequelize')
const {BrowserWindow}  = require('electron');
const dialog = require('electron').dialog 
const sequelize = new Sequelize('test','postgres','postgres',{
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
   
        sequelize.authenticate()
        .then( () => {sequelize.sync(), dialogs(true)})
        .catch( () => dialogs(false))
        
 
}


exports.sequelize = sequelize;
exports.authDatabase = authDatabase;

const dialogs = (value) => {
    const cw = BrowserWindow.getFocusedWindow()
    if (value){
      let options  = {
        message: "conexion exitosa"
       }
      dialog.showMessageBox(cw,options);
    }
     else{
      let options  = {
        message: "conexion fallida, revise credenciales"
       }
       dialog.showMessageBox(cw,options)
      
    }
}