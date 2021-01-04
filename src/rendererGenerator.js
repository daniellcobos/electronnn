const {  ipcRenderer } = require('electron');
ipcRenderer.on('generadorex', (e,args) => {preguntas = randomRendering(args)})

const main = document.querySelector('main')
const button = document.querySelector('button')
let preguntas = []
randomRendering = (arr) => {
 const newarr = []
 let arr1 = arr[0];
 let arr2 = arr[1];
 let arr3 = arr[2];

 shuffleArray(arr1)
 shuffleArray(arr2)
 shuffleArray(arr3)

 newarr.push(arr1)
 newarr.push(arr2)
 newarr.push(arr3)

 return(newarr)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

renderModule = (module) => {
    for (question of module) {
        const id = question.dataValues.id
        const desc = question.dataValues.desc
        const A = question.dataValues.A
        const B = question.dataValues.B
        const C = question.dataValues.C
        const D = question.dataValues.D
        const res = question.dataValues.Respuesta
        const imagen = question.dataValues.Imagen
        const qdiv = document.createElement("div")
        qdiv.className="qdiv"
      
        idp = document.createElement("p")
        descp = document.createElement("p")
        atext = document.createElement("p")
        btext = document.createElement("p")
        ctext = document.createElement("p")
        dtext = document.createElement("p")
        resp = document.createElement("p")
        img = document.createElement("img")
        img.src = imagen
        idp.className = "par"
        descp.className = "impar"
        atext.className = "par"
        btext.className = "impar"
        ctext.className = "par"
        dtext.className = "impar"
        resp.className = "par"
        img.className = "impar"
        newbutton = document.createElement("button")
        newbutton.innerText = "Cambiar Pregunta"
        newbutton.id = id
        newbutton.className="newbutton"
        idp.innerText = 'Id: ' + id 
        descp.innerText = 'Enunciado: ' + desc
        atext.innerText = 'Respuesta A: ' + A
        btext.innerText = 'Respuesta B: ' + B
        ctext.innerText = 'Respuesta C: ' + C
        dtext.innerText = 'Respuesta D: ' + D
        resp.innerText = 'Respuesta correcta:' + res
        
        qdiv.appendChild(idp)
        qdiv.appendChild(descp)
        qdiv.appendChild(img)
        qdiv.appendChild(atext)
        qdiv.appendChild(btext)
        qdiv.appendChild(ctext)
        qdiv.appendChild(dtext)
        qdiv.appendChild(resp)
        qdiv.appendChild(newbutton)
 
        
        newbutton.addEventListener ('click', () => { newbutton.remove()}) 
        main.appendChild(qdiv)
    }
}

generateExam= () => {
    for (module of preguntas){
        renderModule(module)
    }
}
button.addEventListener('click',() => {generateExam()})