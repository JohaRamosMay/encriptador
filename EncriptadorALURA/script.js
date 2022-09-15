var textoCapturado = document.querySelector(".message");

var textoResultado = document.querySelector(".text-result");

var botonEncriptar = document.querySelector(".code-btn");

var botonDesencriptar = document.querySelector(".uncode-btn");

var botonCopiar = document.querySelector(".copy-btn");

function encriptar(){
    var mensaje = textoCapturado.value.toLowerCase();
    var mensajeEncriptado = mensaje.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    textoResultado.value = mensajeEncriptado;

    document.querySelector(".hide").style.display="none";
    document.querySelector(".hide1").style.display="none";
    document.querySelector(".hide2").style.display="none";

    textoResultado.style.visibility="visible";
    botonCopiar.style.visibility="visible";
}

function desencriptar(){
    var mensaje = textoCapturado.value;
    var mensajeDesencriptado = mensaje.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    textoResultado.value = mensajeDesencriptado;

    document.querySelector(".hide").style.display="none";
    document.querySelector(".hide1").style.display="none";
    document.querySelector(".hide2").style.display="none";

    textoResultado.style.visibility="visible";
    botonCopiar.style.visibility="visible";
}

function copiar(){
    var mensajeEncriptado = textoResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    textoCapturado.value ="";
    textoResultado.value = "";
    textoCapturado.focus();
}