const dadosJogador1 = document.querySelectorAll("img")[0]
const numeroAleatorio1 = Math.floor(Math.random() * 6 + 1)
dadosJogador1.getAttribute("src")
console.log(dadosJogador1.setAttribute("src", "./src/img/dice" + numeroAleatorio1 + ".png"))

const dadosJogador2 = document.querySelectorAll("img")[1]
const numeroAleatorio2 = Math.floor(Math.random() * 6 + 1)
dadosJogador2.getAttribute("src")
console.log(dadosJogador2.setAttribute("src", "./src/img/dice" + numeroAleatorio2 + ".png"))

if(numeroAleatorio1 > numeroAleatorio2){
    document.querySelector("h1").innerHTML = "Jogador 1 Venceu!"
}else if(numeroAleatorio1 < numeroAleatorio2){
    document.querySelector("h1").innerHTML = "Jogador 2 Venceu!"
}else{
    document.querySelector("h1").innerHTML = "Empate!"
}

function atualizarPagina(){
    location.reload()
}