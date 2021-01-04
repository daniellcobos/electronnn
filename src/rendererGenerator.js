const {  ipcRenderer } = require('electron');
ipcRenderer.on('generadorex', (e,args) => {console.log(args)})