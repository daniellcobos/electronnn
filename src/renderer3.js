const { app, ipcRenderer } = require('electron');
let anything = {}
tbutton = document.getElementById('caarga')
maindiv = document.getElementById('main')

ipcRenderer.on('window3', (e,args) => {renderer(args)} )
tbutton.addEventListener('click', () =>{
    renderer(this.anything)
  });

  const renderer = (array) => {
    for (item of array) {
       const id = item.dataValues.id
       desc = item.dataValues.desc
       qdiv = document.createElement("div")
       idp = document.createElement("p")
       descp = document.createElement("p")
       newbutton = document.createElement("button")
       newbutton.innerText = "editar"
       newbutton.id = id
       idp.innerText = 'Id: ' + id 
       descp.innerText = 'Descripcion: ' + desc
       newbutton.addEventListener ('click', () => {console.log(id)}) 
       qdiv.appendChild(idp)
       qdiv.appendChild(descp)
       qdiv.appendChild(newbutton)
       maindiv.appendChild(qdiv)
       
    }
   }
   
   