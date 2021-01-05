
const {sequelize} = require("./database.js");
const {BrowserWindow} = require ('electron');
const path = require("path");

closedatabase = function ()  {


  try{
    sequelize.close().then(res => console.log('conexion cerrada')).catch(err => console.log(err))
  }
 catch (err) {
   console.log(err)
 }
}
createpromptwindow = () => {
    const promptWindow = new BrowserWindow({
        width: 400,
        height: 200,
        webPreferences: { nodeIntegration: true },
        backgroundColor: "white",
      });
    promptWindow.loadFile(path.join(__dirname, "prompt.html"));
}

forceDatabase = () => {
  try {
    sequelize
      .sync({force: true})
      .then((result) => console.log( result))
      .catch((error) =>
        console.error("Unable to connect to the database:", error)
      );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
module.exports = [
    // { role: 'appMenu' }
    {
      label: 'Menu',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    // { role: 'fileMenu' }
    {
      label: 'Base de Datos',
       submenu: [
           {label: 'Entrar a Base de Datos', click: () => createpromptwindow()},
           {label: 'Salir de Base de Datos', click: () => closedatabase()},
           {label: 'Reiniciar Base de datos (PELIGROSO)', click: () => forceDatabase()},
       ]
    },
    // { role: 'editMenu' }
    {
      label: 'Editar',
      submenu: [
        { role: 'Deshacer' },
        { role: 'Rehacer' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
       
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]
  
