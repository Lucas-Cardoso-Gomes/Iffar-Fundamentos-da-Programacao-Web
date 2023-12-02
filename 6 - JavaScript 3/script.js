botaosomar = document.getElementById("btnSomar")
var div = document.getElementById("saida")
var campos = document.getElementsByTagName("input");
var campoA = campos[0];
var campoB = campos[1];

botaosomar.onclick = function(){
    var numeroA = parseInt(campoA.value);
    var numeroB = parseInt(campoB.value);
    var somatorio = numeroA + numeroB;

    if (!isNaN(somatorio)){
        escreverNaTela(somatorio);
    }
}

function escreverNaTela(texto){
    // ex tipo 1
    //div.innerHTML = texto;
    // ex tipo 2
    var h1 = document.createElement("h1");
    h1.innerHTML = texto;
    div.appendChild(h1);
    // ex tipo 3
    //div.innerHTML = '<h1>'+texto+'</h1>';
    // innetHTML substitui o conteudo do que chamou ela, tipo div.innetHTML
}

document.getElementById("btnLimpar").onclick = function(){
    campoA.value="";
    campoB.value="";
    escreverNaTela("");
}