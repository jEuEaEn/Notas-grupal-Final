
//Boton menu
const botones = document.querySelectorAll(".sidebar-btn");

botones.forEach(btn => {
    btn.addEventListener("click", () => {

        // Quita activo de todos
        botones.forEach(b => b.classList.remove("activo"));

        // Activa el que tocaste
        btn.classList.add("activo");
    });
});

//menu

//cerrar
const menu = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("colapsado");
});

//abrir
    toggleBtn.addEventListener("click", () => {
        if (sidebar.classList.contains("collapsed")) {
            // Se va a ABRIR → activar animación
            sidebar.classList.remove("collapsed");
            sidebar.classList.add("expanded");
        } else {
            // Se va a CERRAR → sin animación personalizada
            sidebar.classList.remove("expanded");
            sidebar.classList.add("collapsed");
        }
    });




/*------------------ Notas------------------*/

const titulo = document.getElementById("title")
const texto = document.getElementById("text")
