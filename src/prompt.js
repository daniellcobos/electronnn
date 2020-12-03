const { app, ipcRenderer } = require('electron');


var ipc = require('electron').ipcRenderer;
let main = document.querySelector('form')
sbutton = document.getElementById('send')


sbutton.addEventListener('click', () => {
  const Prompt = makePrompt(main.Base.value,main.Usuario.value,main.password.value,main.host.value)
  ipcRenderer.send("Prompt", Prompt)
  
});



const makePrompt = (dbase,user,pass,host) => {
  const newPrompt = {
    base : dbase,
    usuario: user,
    password: pass,
    hosting: host,
  }
  return newPrompt
}