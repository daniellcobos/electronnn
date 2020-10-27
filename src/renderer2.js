const { app, BrowserWindow, ipcRenderer } = require('electron');


var ipc = require('electron').ipcRenderer;
let main = document.querySelector('div')
cbutton = document.getElementById('charge')
tbutton = document.getElementById('test')
cbutton.addEventListener('click', () => {
  const par = document.createElement('p')
  par.textContent = 'askdjaslkdjaskl'
  main.appendChild(par)
});


tbutton.addEventListener('click', () =>{
  ipcRenderer.send('database')
});