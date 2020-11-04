const {  ipcRenderer } = require('electron');
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
       const desc = item.dataValues.desc
       const qdiv = document.createElement("div")
       idp = document.createElement("p")
       descp = document.createElement("p")
       newbutton = document.createElement("button")
       newbutton.innerText = "editar"
       newbutton.id = id
       idp.innerText = 'Id: ' + id 
       descp.innerText = 'Descripcion: ' + desc
       qdiv.appendChild(idp)
       qdiv.appendChild(descp)
       qdiv.appendChild(newbutton)
       newbutton.addEventListener ('click', () => {newform(qdiv,id)}) 
       maindiv.appendChild(qdiv)
       
    }
   }
  const newform = (div,id) => {
    nform = document.createElement("form")
    var desc = document.createElement("input"); 
    desc.setAttribute("type", "text"); 
    desc.setAttribute("name", "desc"); 
    desc.setAttribute("placeholder", "Full Name"); 
    newbutton2 = document.createElement("button")
    newbutton2.innerText = "enviar"
    nform.appendChild(desc)
    div.appendChild(nform)
    div.appendChild(newbutton2)
    
    newbutton2.addEventListener ('click', () => {
      
      ipcRenderer.send('editdatabase',id,desc.value)
     
    })
    
  }
   