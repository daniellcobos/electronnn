const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
var ipc = require("electron").ipcRenderer;
const Sequelize = require("sequelize");
const sequelize = require("./database.js");
const testthing = require("./models/testmodel");
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
};
const createSecondWindow = () => {
  const mainw = BrowserWindow.fromId(1);
  const secondWindow = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: { nodeIntegration: true },
    parent: mainw,
    backgroundColor: "white",
  });
  secondWindow.loadFile(path.join(__dirname, "ondex.html"));
};

const createThirdWindow = () => {
  const mainw = BrowserWindow.fromId(1);
  const thirdWindow = new BrowserWindow({
    width: 800,
    height: 400,
    webPreferences: { nodeIntegration: true },
    parent: mainw,
    backgroundColor: "white",
  });
  wc = thirdWindow.webContents;
  thirdWindow.loadFile(path.join(__dirname, "undex.html"));
  wc.once("dom-ready", () => {
    testthing
      .findAll()
      .then((args) => {wc.send("window3", args); console.log(args)})
      .catch((err) => console.log(err));
  });
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
      desc: pregunta.descripcion,
      A: pregunta.A,
      B: pregunta.B,
      C: pregunta.C,
      D: pregunta.D,
      Respuesta: pregunta.Respuesta,
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err)); 
};

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
ipcMain.on("windows", function () {
  createSecondWindow();
});
ipcMain.on("windows2", function () {
  createThirdWindow();
});
ipcMain.on("form", (e, args) => {
  createTest(args);
});
ipcMain.on("database", function () {
  try {
    sequelize
      .sync()
      .then((result) => console.log("funciona" + result))
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
      console.log(pregunta)
      thing.desc = pregunta.desc;
      thing.A = pregunta.A
      thing.B = pregunta.B
      thing.C = pregunta.C
      thing.D = pregunta.D
      thing.Respuesta = pregunta.Respuesta
      return thing.save();
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});
