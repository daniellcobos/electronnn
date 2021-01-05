const {  ipcRenderer } = require('electron');
let anything = {}
tbutton = document.getElementById('caarga')
maindiv = document.getElementById('main')

ipcRenderer.on('window3', (e,args) => {
  dynaRender(args)
} )
  const dynaRender = (arr) => {
    
    for (item of arr) {
      const typeimg = item.dataValues.multimagen
    if (typeimg){
      imgRenderer(item)
    }
    else{
      renderer(item)
    }
    }
    
  }


  const renderer = (item) => {
    
    
       const id = item.dataValues.id
       const desc = item.dataValues.desc
       const cont = item.dataValues.contexto
       const A = item.dataValues.A
       const B = item.dataValues.B
       const C = item.dataValues.C
       const D = item.dataValues.D
       const res = item.dataValues.Respuesta
       const imagen = item.dataValues.Imagen
       const qdiv = document.createElement("div")
       qdiv.className="qdiv"
     
       idp = document.createElement("p")
       descp = document.createElement("p")
       contxp = document.createElement("p")
       atext = document.createElement("p")
       btext = document.createElement("p")
       ctext = document.createElement("p")
       dtext = document.createElement("p")
       resp = document.createElement("p")
       img = document.createElement("img")
       img.src = imagen
       idp.className = "par"
       descp.className = "impar"
       contxp.className = "par"
       atext.className = "impar"
       btext.className = "par"
       ctext.className = "impar"
       dtext.className = "par"
       resp.className = "impar"
       img.className = "par"
       newbutton = document.createElement("button")
       newbutton.innerText = "Editar Pregunta"
       newbutton.id = id
       newbutton.className="newbutton"
       idp.innerText = 'Id: ' + id 
       descp.innerText = 'Enunciado: ' + desc
       contxp.innerText = 'Contexto: ' + cont
       atext.innerText = 'Respuesta A: ' + A
       btext.innerText = 'Respuesta B: ' + B
       ctext.innerText = 'Respuesta C: ' + C
       dtext.innerText = 'Respuesta D: ' + D
       resp.innerText = 'Respuesta correcta:' + res
       
       qdiv.appendChild(idp)
       qdiv.appendChild(descp)
       qdiv.appendChild(contxp)
       qdiv.appendChild(img)
       qdiv.appendChild(atext)
       qdiv.appendChild(btext)
       qdiv.appendChild(ctext)
       qdiv.appendChild(dtext)
       qdiv.appendChild(resp)
       qdiv.appendChild(newbutton)

       
       newbutton.addEventListener ('click', () => {newform(qdiv,id); newbutton.remove()}) 
       maindiv.appendChild(qdiv)
       
    
   }
   const imgRenderer = (item) => {
    
    
       const id = item.dataValues.id
       const desc = item.dataValues.desc
       const cont = item.dataValues.contexto
       const A = item.dataValues.A
       const B = item.dataValues.B
       const C = item.dataValues.C
       const D = item.dataValues.D
       const res = item.dataValues.Respuesta
       const imagen = item.dataValues.Imagen
       const qdiv = document.createElement("div")
       qdiv.className="qdiv"
     
       idp = document.createElement("p")
       descp = document.createElement("p")
       contxp = document.createElement("p")
       atext = document.createElement("p")
       btext = document.createElement("p")
       ctext = document.createElement("p")
       dtext = document.createElement("p")
       aimg = document.createElement("img")
       bimg = document.createElement("img")
       cimg = document.createElement("img")
       dimg = document.createElement("img")
       resp = document.createElement("p")
       img = document.createElement("img")
       img.src = imagen
       aimg.src = A
       bimg.src = B
       cimg.src = C
       dimg.src = D
       idp.className = "par"
       descp.className = "impar"
       contxp.className = "par"
       aimg.className = "resimg"
       bimg.className = "resimg"
       cimg.className = "resimg"
       dimg.className = "resimg"
       atext.className = "impar"
       btext.className = "impar"
       ctext.className = "impar"
       dtext.className = "impar"
       resp.className = "impar"
       img.className = "par"
       newbutton = document.createElement("button")
       newbutton.innerText = "Editar Pregunta"
       newbutton.id = id
       newbutton.className="newbutton"
       idp.innerText = 'Id: ' + id 
       descp.innerText = 'Enunciado: ' + desc
       contxp.innerText = 'Contexto: ' + cont
       resp.innerText = 'Respuesta correcta:' + res
       atext.innerText = 'Respuesta A: ' 
       btext.innerText = 'Respuesta B: ' 
       ctext.innerText = 'Respuesta C: ' 
       dtext.innerText = 'Respuesta D: ' 

       qdiv.appendChild(idp)
       qdiv.appendChild(descp)
       qdiv.appendChild(contxp)
       qdiv.appendChild(img)
       qdiv.appendChild(atext)
       qdiv.appendChild(aimg)
       qdiv.appendChild(btext)
       qdiv.appendChild(bimg)
       qdiv.appendChild(ctext)
       qdiv.appendChild(cimg)
       qdiv.appendChild(dtext)
       qdiv.appendChild(dimg)
       qdiv.appendChild(resp)
       qdiv.appendChild(newbutton)

       
       newbutton.addEventListener ('click', () => {newform(qdiv,id); newbutton.remove()}) 
       maindiv.appendChild(qdiv)
   }
  const newform = (div,id) => {

    nform = document.createElement("form")
    nform.className = "editform"
    var desc = document.createElement("input"); 
    desc.setAttribute("type", "text"); 
    desc.setAttribute("name", "desc"); 
    desc.setAttribute("placeholder", "Nueva descripcion");
    var contx = document.createElement("input"); 
    contx.setAttribute("type", "text"); 
    contx.setAttribute("name", "cont"); 
    contx.setAttribute("placeholder", "Nuevo Contexto"); 
    var a = document.createElement("input"); 
    a.setAttribute("type", "text"); 
    a.setAttribute("name", "a"); 
    a.setAttribute("placeholder", "a"); 
    var b = document.createElement("input"); 
    b.setAttribute("type", "text"); 
    b.setAttribute("name", "b"); 
    b.setAttribute("placeholder", "b"); 
    var c = document.createElement("input"); 
    c.setAttribute("type", "text"); 
    c.setAttribute("name", "c"); 
    c.setAttribute("placeholder", "c"); 
    var d = document.createElement("input"); 
    d.setAttribute("type", "text"); 
    d.setAttribute("name", "d"); 
    d.setAttribute("placeholder", "d"); 
    var res = document.createElement("input"); 
    res.setAttribute("type", "text"); 
    res.setAttribute("name", "res"); 
    res.setAttribute("placeholder", "A"); 
    newbutton2 = document.createElement("button")
    newbutton2.innerText = "enviar"
    nform.appendChild(desc)
    nform.appendChild(contx)
    nform.appendChild(a)
    nform.appendChild(b)
    nform.appendChild(c)
    nform.appendChild(d)
    nform.appendChild(res)
    div.appendChild(nform)
    div.appendChild(newbutton2)
   
    newbutton2.addEventListener ('click', () => {
      const pregunta = {
        desc: desc.value,
        contexto:contx.value,
        A: a.value,
        B: b.value,
        C: c.value,
        D: d.value,
        Respuesta: res.value,
      }
      console.log(pregunta)
      ipcRenderer.send('editdatabase',id,pregunta)
     
    })
    
  }
   