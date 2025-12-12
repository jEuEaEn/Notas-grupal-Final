const titulo = document.getElementById("title");
const texto = document.getElementById("text");

// Para saber si están en focus o no
let tituloFocus = false;
let textoFocus = false;

function mostrarTitulo() {
    titulo.classList.remove("desaparecer");
    titulo.classList.add("aparecer");
}

function ocultarTitulo() {
    titulo.classList.remove("aparecer");
    titulo.classList.add("desaparecer");
}

function verificarOcultar() {
    // Si ninguno tiene focus → ocultar
    if (!tituloFocus && !textoFocus) {
        ocultarTitulo();
    }
}


//  LISTENERS DEL TÍTULO

titulo.addEventListener("focus", () => {
    tituloFocus = true;
    mostrarTitulo();
});

titulo.addEventListener("blur", () => {
    tituloFocus = false;
    // Esperar a que el navegador actualice el focus real
    setTimeout(verificarOcultar, 0);
});


//  LISTENERS DE INFORMACIÓN

texto.addEventListener("focus", () => {
    textoFocus = true;
    mostrarTitulo();
});

texto.addEventListener("blur", () => {
    textoFocus = false;
    setTimeout(verificarOcultar, 0);
});





/*----------Notas----------*/

const ContentNote = document.getElementById("Note")
const note = []

function sheet(){

  ContentNote.innerHTML = ""

  note.forEach((valor,indice) =>{

    const div = document.createElement("div")
    div.className = "divNotas"
    ContentNote.appendChild(div)


    const Titulo = document.createElement("h4")
    Titulo.textContent = valor
    div.appendChild(Titulo)
    Titulo.classList = ("")

    const Texto = document.createElement("h2")
      

  })

}
