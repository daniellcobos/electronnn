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
  const Question = makeQuestion(
   
    main.desc.value,
    main.cont.value,
    getImage(main.A.files[0].path),
    getImage(main.B.files[0].path),
    getImage(main.C.files[0].path),
    getImage(main.D.files[0].path),
    main.Respuesta.value,
    main.Categoria.value,
    getImage(main.imgn.files[0].path)
    )
  ipcRenderer.send('formImg', Question)
 
});




const makeQuestion = (desc,contx,a,b,c,d,rest,cat,img) => {
  const newQuestion = {
    typeimg: true,
    descripcion: desc,
    contexto: contx,
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
