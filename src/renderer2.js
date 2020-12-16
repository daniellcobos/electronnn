const {ipcRenderer } = require('electron');
const {app} = require('electron').remote
const fs = require('fs');
const path = require('path');
const {basename} = require('path');

const userpath = path.join(app.getPath('userData'),'images')
let main = document.querySelector('form')
cbutton = document.getElementById('charge')


cbutton.addEventListener('click', () => {
  if (!fs.existsSync(userpath)) {
    fs.mkdir(userpath, err => console.log(err))
  }
  const image = main.img.files[0]
  getImage(image.path)
  const Question = makeQuestion(main.desc.value,main.A.value,main.B.value,main.C.value,main.D.value,main.Respuesta.value,main.Categoria.value,getImage(main.img.files[0].path))
  ipcRenderer.send('form', Question)
 
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


getImage = (imgpath) => {
  const imageData = fs.readFileSync(imgpath);
 const newpath = path.join(userpath,basename(imgpath))
  try { fs.writeFileSync(newpath, imageData, 'utf-8'); }
   
catch(e) { console.log(e)}
 return newpath
}
