const { app, ipcRenderer } = require('electron');
var ipc = require('electron').ipcRenderer;

document.getElementById('add').addEventListener('click', () => {
  ipcRenderer.send('windows')

});
document.getElementById('addd').addEventListener('click', () => {
  ipcRenderer.send('windows2')

});
document.getElementById('urbano').addEventListener('click', () => {
  ipcRenderer.send('windows3')

});
document.getElementById('rural').addEventListener('click', () => {
  ipcRenderer.send('windows4')

});