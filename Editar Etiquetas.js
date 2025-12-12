// Cerrar el modal cuando se presione la X o el botón Finalizado
document.addEventListener("DOMContentLoaded", () => {

    const modal = document.querySelector(".modal-editar");
    const btnCerrar = document.querySelector(".cerrar-x");
    const btnFinal = document.querySelector(".btn-finalizado");

    if (!modal) return;

    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    btnFinal.addEventListener("click", () => {
        modal.style.display = "none";
    });

});
