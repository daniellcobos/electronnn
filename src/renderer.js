const { app, BrowserWindow, ipcRenderer } = require('electron');
var ipc = require('electron').ipcRenderer;

document.getElementById('add').addEventListener('click', () => {
  ipcRenderer.send('windows')

});
document.getElementById('addd').addEventListener('click', () => {
  ipcRenderer.send('windows2')

});