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
      archivar.classList.remove("desaparecer");
      archivar.classList.add("aparecer");
      quitar.classList.remove("desaparecer");
      quitar.classList.add("aparecer");
  }

  function ocultarObjetos() {
      titulo.classList.remove("aparecer");
      titulo.classList.add("desaparecer");
      archivar.classList.remove("aparecer");
      archivar.classList.add("desaparecer");
      quitar.classList.remove("aparecer");
      quitar.classList.add("desaparecer");
  }

  function verificarOcultar() {
      // Si ninguno tiene focus → ocultar
      if (!tituloFocus && !textoFocus && !archivarFocus && !XFocus) {
          ocultarObjetos();
          envio2();
      }
  }

  // LISTENERS DE ARCHIVAR
  archivar.addEventListener("focus", () => {
      archivarFocus = true;
      mostrarObjetos();
  });

  archivar.addEventListener("blur", () => {
      archivarFocus = false;
      setTimeout(verificarOcultar, 0);
  });

  // LISTENERS DEL TÍTULO
  titulo.addEventListener("focus", () => {
      tituloFocus = true;
      mostrarObjetos();
  });

  titulo.addEventListener("blur", () => {
      tituloFocus = false;
      setTimeout(verificarOcultar, 0);
  });

  // LISTENERS DE INFORMACIÓN
  texto.addEventListener("focus", () => {
      textoFocus = true;
      mostrarObjetos();
  });

  texto.addEventListener("blur", () => {
      textoFocus = false;
      setTimeout(verificarOcultar, 0);
  });

  // BOTÓN X: cerrar input de título
  quitar.addEventListener("click", () => {
      titulo.blur(); // pierde el foco y vuelve al estado natural
  });

}

envio();

/*----------Notas----------*/
const ContentNote = document.getElementById("Note");
const noteTi = [];
const noteTe = [];

/* ============================
      CARGAR DESDE LOCALSTORAGE
 ============================ */
const notasGuardadas = JSON.parse(localStorage.getItem("noteTi")) || [];
const textosGuardados = JSON.parse(localStorage.getItem("noteTe")) || [];

notasGuardadas.forEach((valor, indice) => {
    noteTi.push(valor);
    noteTe.push(textosGuardados[indice]);
});

sheet(); // Mostrar notas al iniciar

function sheet(){

  ContentNote.innerHTML = "";

  noteTi.forEach((valor, indice) => {

    const div = document.createElement("div");
    div.className = "divNotas";
    ContentNote.appendChild(div);

    const Titulo = document.createElement("h1");
    Titulo.textContent = valor;
    Titulo.classList.add("Titulo");
    div.appendChild(Titulo);

    const Texto = document.createElement("p");
    Texto.textContent = noteTe[indice];
    Texto.classList.add("Texto");
    div.appendChild(Texto);

    
    // BOTÓN ELIMINAR NOTA
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btnEliminar"); // estilizar con CSS si quieres
    div.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", () => {
      // Eliminar la nota del arreglo
      noteTi.splice(indice, 1);
      noteTe.splice(indice, 1);

      // Actualizar localStorage
      localStorage.setItem("noteTi", JSON.stringify(noteTi));
      localStorage.setItem("noteTe", JSON.stringify(noteTe));

      
      sheet();
    });

  });

}

function envio2(){

  if(titulo.value.trim() === "" && texto.value.trim() === ""){
    return;
  }

  noteTi.push(titulo.value);
  noteTe.push(texto.value);

  titulo.value = "";
  texto.value = "";

  sheet();

  // Guardar notas en localStorage
  localStorage.setItem("noteTi", JSON.stringify(noteTi));
  localStorage.setItem("noteTe", JSON.stringify(noteTe));
}
