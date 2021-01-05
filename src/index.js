const { app,BrowserWindow,  ipcMain,ipcRenderer, Menu, remote } = require("electron");
const path = require("path");
var ipc = require("electron").ipcRenderer;
const Sequelize = require("sequelize");
const {sequelize,authDatabase} = require("./database.js");
const testthing = require("./models/testmodel");


let Mainmenu = Menu.buildFromTemplate(require('./menu'))

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: { nodeIntegration: true },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  Menu.setApplicationMenu(Mainmenu)
};

const createSecondWindow = () => {
  const mainw = BrowserWindow.fromId(1);
  const secondWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: { nodeIntegration: true,enableRemoteModule: true, },
    parent: mainw,
    backgroundColor: "white",
    
  });
  secondWindow.loadFile(path.join(__dirname, "ondex.html"));
};

const createSecondImgWindow = () => {
  const mainw = BrowserWindow.fromId(1);
  const secondWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: { nodeIntegration: true,enableRemoteModule: true, },
    parent: mainw,
    backgroundColor: "white",
    
  });
  secondWindow.loadFile(path.join(__dirname, "createqimg.html"));
};

const createThirdWindow = (cat) => {
  const mainw = BrowserWindow.fromId(1);
  const thirdWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: { nodeIntegration: true },
    parent: mainw,
    backgroundColor: "white",
  });
  wc = thirdWindow.webContents;
  thirdWindow.loadFile(path.join(__dirname, "undex.html"));
  wc.once("dom-ready", () => {
    
    testthing
      .findAll( {
        where: {
          Categoria: cat
        }
      } )
      .then((args) => {wc.send("window3", args); console.log(args)})
      .catch((err) => console.log(err));
  });
};
const createGenerator = () => {
  const mainw = BrowserWindow.fromId(1);
  const fourthWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: { nodeIntegration: true },
    parent: mainw,
    backgroundColor: "white",
  });
  wc = fourthWindow.webContents;
  fourthWindow.loadFile(path.join(__dirname, "examen.html"));
  wc.once("dom-ready", () => {
    const tests = []
       testthing.findAll({where:{ Categoria: "General"}}).then(args => tests.push(args));
      testthing.findAll({where:{ Categoria: "Rural"}}).then(args => tests.push(args));
      testthing.findAll({where:{ Categoria: "Urbano"}}).then(args => tests.push(args));
      setTimeout(() => {wc.send("generadorex",tests)} , 2000);
   
  }
  );
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
// Database Handlers

createTest = function (pregunta) {
  console.log(pregunta)
  testthing
    .create({
      multimagen: pregunta.typeimg,
      desc: pregunta.descripcion,
      contexto: pregunta.contexto,
      A: pregunta.A,
      B: pregunta.B,
      C: pregunta.C,
      D: pregunta.D,
      Respuesta: pregunta.Respuesta,
      Categoria : pregunta.Categoria,
      Imagen: pregunta.Imagen,
    })
    .then((result) => 
    {
      const window = BrowserWindow.getFocusedWindow()
      window.close()
    }
    )
    .catch((err) => console.log(err)); 
};

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
ipcMain.on("windows", function () {
  createSecondWindow();
});
ipcMain.on("windowimg", function () {
  createSecondImgWindow();
});
ipcMain.on("windows2", function () {
  createThirdWindow("General");
});
ipcMain.on("windows3", function () {
  createThirdWindow("Urbano");
});
ipcMain.on("windows4", function () {
  createThirdWindow("Rural");
});
ipcMain.on("form", (e, args) => {
  createTest(args);
});
ipcMain.on("formImg", (e, args) => {
  createTest(args);
});
ipcMain.on("database", function () {

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
});
ipcMain.on("editdatabase", (e, id, pregunta) => {
  testthing
    .findByPk(id)
    .then((thing) => {
  
      thing.desc = pregunta.desc ? pregunta.desc: thing.desc;
      thing.contexto = pregunta.contexto ? pregunta.contexto : thing.contexto;
      thing.A = pregunta.A ? pregunta.A : thing.A;
      thing.B = pregunta.B ? pregunta.B : thing.B;
      thing.C = pregunta.C ? pregunta.C : thing.C;
      thing.D = pregunta.D ? pregunta.D : thing.D;
      thing.Respuesta = pregunta.Respuesta ? pregunta.Respuesta : thing.Respuesta;
      return thing.save();
    })
    .then((result) => console.log(result))
    .catch((err) => {console.log(err)});
});
ipcMain.on("Prompt", (e,prompt) => {
  authDatabase(prompt.base,prompt.usuario,prompt.password,prompt.hosting)
})
ipcMain.on("generador", function () {
  createGenerator();
});

