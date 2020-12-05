const { app, ipcRenderer } = require('electron');
const fs = require('fs');
 

var ipc = require('electron').ipcRenderer;
let main = document.querySelector('form')
cbutton = document.getElementById('charge')
tbutton = document.getElementById('test')
upbutton = document.getElementById('upload')

cbutton.addEventListener('click', () => {
  const Question = makeQuestion(main.desc.value,main.A.value,main.B.value,main.C.value,main.D.value,main.Respuesta.value,main.Categoria.value,getImage(main.img.files[0].path))
 ipcRenderer.send('form', Question)
 
});


tbutton.addEventListener('click', () =>{

  ipcRenderer.send('database')
});

const makeQuestion = (desc,a,b,c,d,rest,cat,img) => {
  const newQuestion = {
    descripcion: desc,
    A: a,
    B: b,
    C: c,
    D: d,
    Respuesta: rest,
    Categoria: cat,
    Imagen: img,
  }
  return newQuestion
}


getImage = (path) => {
  const imageData = fs.readFileSync(path);
  return imageData
}

