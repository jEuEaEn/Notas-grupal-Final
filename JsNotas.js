const titulo = document.getElementById("title");
const texto = document.getElementById("text");

let tituloFocus = false;
let textoFocus = false;

// TÍTULO
titulo.addEventListener("focus", () => {
  tituloFocus = true;
  mostrarTitulo();
});
titulo.addEventListener("blur", () => {
  tituloFocus = false;
  verificarOcultar();
});

// TEXTO
texto.addEventListener("focus", () => {
  textoFocus = true;      // <-- CORRECCIÓN: activar textoFocus, no tituloFocus
  mostrarTitulo();
});
texto.addEventListener("blur", () => {
  textoFocus = false;
  verificarOcultar();
});

// FUNCIONES
function mostrarTitulo() {
  titulo.classList.remove("desaparecer");
  titulo.classList.add("aparecer");
}

function verificarOcultar() {
  if (!tituloFocus && !textoFocus) {
    titulo.classList.add("desaparecer");
    titulo.classList.remove("aparecer");
  }
}
