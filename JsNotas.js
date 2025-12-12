const titulo = document.getElementById("title");
const texto = document.getElementById("text");
const archivar = document.getElementById("archivar");
const quitar = document.getElementById("Cerrar");

function envio(){

// Para saber si están en focus o no
let tituloFocus = false;
let textoFocus = false;
let archivarFocus = false;
let XFocus = false;

function mostrarObjetos() {
    titulo.classList.remove("desaparecer");
    titulo.classList.add("aparecer");
}

function ocultarObjetos() {
    titulo.classList.remove("aparecer");
    titulo.classList.add("desaparecer");
}

function verificarOcultar() {
    // Si ninguno tiene focus → ocultar
    if (!tituloFocus && !textoFocus && !archivarFocus && !XFocus) {
        ocultarObjetos();
        envio2();
    }
}


//  LISTENERS DE ARCHIVAR

archivar.addEventListener("focus", () => {
    archivarFocus = true;
    mostrarObjetos();
});

archivar.addEventListener("blur", () => {
    archivarFocus = false;
    // Esperar a que el navegador actualice el focus real
    setTimeout(verificarOcultar, 0);
});

//  LISTENERS DEL TÍTULO

titulo.addEventListener("focus", () => {
    tituloFocus = true;
    mostrarObjetos();
});

titulo.addEventListener("blur", () => {
    tituloFocus = false;
    // Esperar a que el navegador actualice el focus real
    setTimeout(verificarOcultar, 0);
});


//  LISTENERS DE INFORMACIÓN

texto.addEventListener("focus", () => {
    textoFocus = true;
    mostrarObjetos();
});

texto.addEventListener("blur", () => {
    textoFocus = false;
    setTimeout(verificarOcultar, 0);
});


}

envio()

/*----------Notas----------*/

const ContentNote = document.getElementById("Note")
const noteTi = []
const noteTe = []

function sheet(){

  ContentNote.innerHTML = ""

  noteTi.forEach((valor,indice) =>{

    const div = document.createElement("div")
    div.className = "divNotas"
    ContentNote.appendChild(div)


    const Titulo = document.createElement("h1")
    Titulo.textContent = valor
    Titulo.classList.add("Titulo")
    div.appendChild(Titulo)
 

    const Texto = document.createElement("p")
    Texto.textContent = noteTe[indice]
    Texto.classList.add("Texto")
    div.appendChild(Texto)

})

}

function envio2(){

  if(titulo.value.trim() == "" && texto.value.trim() == ""){

    alert("por favor rellena los dos recuadros")
    return;

  }

  noteTi.push(titulo.value);
  noteTe.push(texto.value);

  titulo.value = ""
  texto.value = ""

  sheet();

}