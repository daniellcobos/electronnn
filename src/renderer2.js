const { app, BrowserWindow, ipcRenderer } = require('electron');
var ipc = require('electron').ipcRenderer;
let main = document.querySelector('div')
document.getElementById('charge').addEventListener('click', () => {
  const par = document.createElement('p')
  par.textContent = 'askdjaslkdjaskl'
  main.appendChild(par)
});
