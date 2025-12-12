document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("title");
  const texto = document.getElementById("text");
  const contenedor = document.getElementById("info"); // tu contenedor

  if (!titulo || !texto || !contenedor) {
    console.warn("No se encontraron los elementos: revisa los IDs");
    return;
  }

  function mostrarTitulo() {
    titulo.classList.add("aparecer");
    titulo.classList.remove("desaparecer");
  }

  function ocultarTitulo() {
    titulo.classList.add("desaparecer");
    titulo.classList.remove("aparecer");
  }

  // Cuando cualquier elemento dentro del contenedor recibe foco -> mostrar
  contenedor.addEventListener("focusin", () => {
    mostrarTitulo();
  });

  // Cuando el foco SALE del contenedor por completo -> ocultar
  contenedor.addEventListener("focusout", (e) => {
    // relatedTarget es el elemento que recibe el foco ahora (puede ser null)
    const siguiente = e.relatedTarget;

    // Si nextFocus no está dentro del contenedor -> ocultar
    if (!contenedor.contains(siguiente)) {
      ocultarTitulo();
    }
    // Si nextFocus está dentro del contenedor, NO ocultamos (porque aún hay foco en algún input)
  });

  // Fallback (por si el navegador no soporta relatedTarget correctamente):
  // revisa después de un micro-tick dónde está el foco
  contenedor.addEventListener("focusout", () => {
    setTimeout(() => {
      const activo = document.activeElement;
      if (!contenedor.contains(activo)) {
        ocultarTitulo();
      }
    }, 0);
  });

});
