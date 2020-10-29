const { app, ipcRenderer } = require('electron');


var ipc = require('electron').ipcRenderer;
let main = document.querySelector('div')
cbutton = document.getElementById('charge')
tbutton = document.getElementById('test')

cbutton.addEventListener('click', () => {
  fvalue = document.getElementById('desc').value;
  ipcRenderer.send('form', fvalue)
  
});


tbutton.addEventListener('click', () =>{
  ipcRenderer.send('database')
});