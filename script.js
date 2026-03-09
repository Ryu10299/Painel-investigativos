const nomeInput = document.getElementById("nomePlayer")
const listaPlayers = document.getElementById("listaPlayers")

let meuNome = ""

const painelArea = document.getElementById("painelArea")

const btnCriarSala = document.getElementById("btnCriarSala")
const btnEntrarSala = document.getElementById("btnEntrarSala")

const codigoSalaInput = document.getElementById("codigoSalaInput")
const codigoSalaTopo = document.getElementById("codigoSalaTopo")

const painel = document.getElementById("painel")

const btnPostit = document.getElementById("btnPostit")
const btnEvidencia = document.getElementById("btnEvidencia")
const upload = document.getElementById("uploadImagem")

const chatBox = document.getElementById("chatBox")
const btnChat = document.getElementById("btnChat")

const playersBox = document.getElementById("playersBox")
const btnPlayers = document.getElementById("btnPlayers")

const recentesBox = document.getElementById("recentesBox")
const btnRecentes = document.getElementById("btnRecentes")
const btnFecharRecentes = document.getElementById("btnFecharRecentes")



/* GERAR CÓDIGO DE SALA */

function gerarCodigo(){

return Math.random().toString(36).substring(2,8).toUpperCase()

}


/* CRIAR SALA */

btnCriarSala.onclick = () => {

const codigo = gerarCodigo()

entrarSala(codigo)

}


/* ENTRAR SALA */

btnEntrarSala.onclick = () => {

const codigo = codigoSalaInput.value

if(codigo){

entrarSala(codigo)

}

}


function entrarSala(codigo){

meuNome = nomeInput.value

if(meuNome == ""){
alert("Digite seu nome")
return
}

document.getElementById("menu").style.display = "none"

painelArea.style.display = "block"

codigoSalaTopo.style.display = "block"

codigoSalaTopo.innerText = "Sala: " + codigo

/* adicionar player na lista */

const player = document.createElement("div")

player.innerText = meuNome

listaPlayers.appendChild(player)

}

document.getElementById("menu").style.display = "none"

painelArea.style.display = "block"

codigoSalaTopo.style.display = "block"

codigoSalaTopo.innerText = "Sala: " + codigo

}



/* CHAT */

btnChat.onclick = () => {

chatBox.style.display =
chatBox.style.display == "none" ? "block" : "none"

}



/* PLAYERS */

btnPlayers.onclick = () => {

playersBox.style.display =
playersBox.style.display == "none" ? "block" : "none"

}



/* RECENTES */

btnRecentes.onclick = () => {

recentesBox.style.display = "block"

}

btnFecharRecentes.onclick = () => {

recentesBox.style.display = "none"

}



/* POSTIT */

btnPostit.onclick = () => {

const div = document.createElement("div")

div.className = "postit item"

div.style.left = "200px"
div.style.top = "200px"

div.innerHTML = "<textarea></textarea>"

painel.appendChild(div)

}



/* EVIDENCIA */

btnEvidencia.onclick = () => {

upload.click()

}

upload.onchange = () => {

const file = upload.files[0]

const reader = new FileReader()

reader.onload = function(e){

const div = document.createElement("div")

div.className = "evidencia item"

div.style.left = "300px"
div.style.top = "200px"

div.innerHTML = `<img src="${e.target.result}">`

painel.appendChild(div)

}

reader.readAsDataURL(file)

}



/* ARRASTAR */

let item = null

document.addEventListener("mousedown", e => {

const el = e.target.closest(".item")

if(el) item = el

})

document.addEventListener("mousemove", e => {

if(item){

item.style.left = e.pageX + "px"
item.style.top = e.pageY + "px"

}

})

document.addEventListener("mouseup", () => {

item = null

})


document.addEventListener("touchstart", e => {

const el = e.target.closest(".item")

if(el) item = el

})

document.addEventListener("touchmove", e => {

if(item){

const touch = e.touches[0]

item.style.left = touch.pageX + "px"
item.style.top = touch.pageY + "px"

}

})

document.addEventListener("touchend", () => {

item = null

})
