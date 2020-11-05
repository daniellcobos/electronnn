const { app, ipcRenderer } = require('electron');


var ipc = require('electron').ipcRenderer;
let main = document.querySelector('form')
cbutton = document.getElementById('charge')
tbutton = document.getElementById('test')

cbutton.addEventListener('click', () => {
  const Question = makeQuestion(main.desc.value,main.A.value,main.B.value,main.C.value,main.D.value,main.Respuesta.value)
  console.log(Question)
  //value = document.getElementById('desc').value;
  //ipcRenderer.send('form', fvalue)
  
});


tbutton.addEventListener('click', () =>{

  ipcRenderer.send('database')
});

const makeQuestion = (desc,a,b,c,d,rest) => {
  const newQuestion = {
    descripcion: desc,
    A: a,
    B: b,
    C: c,
    D: d,
    Respuesta: rest
  }
  return newQuestion
}