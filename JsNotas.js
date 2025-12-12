const titulo = document.getElementById("title");
const texto = document.getElementById("text");

function verificarDesaparicion() {
    // Si el elemento enfocado NO es titulo NI texto → ocultar
    if (
        document.activeElement !== titulo &&
        document.activeElement !== texto
    ) {
        titulo.classList.add("desaparecer");
        titulo.classList.remove("aparecer");
    }
}

// Al hacer blur, verificamos
titulo.addEventListener("blur", verificarDesaparicion);
texto.addEventListener("blur", verificarDesaparicion);

// Si alguno hace focus, el título aparece
titulo.addEventListener("focus", () => {
    titulo.classList.add("aparecer");
    titulo.classList.remove("desaparecer");
});

texto.addEventListener("focus", () => {
    titulo.classList.add("aparecer");
    titulo.classList.remove("desaparecer");
});
