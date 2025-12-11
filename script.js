
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





/*------------------ Notas------------------*/

const titulo = document.getElementById("title")
const texto = document.getElementById("text")

texto.addEventListener("focus",() =>{

    titulo.classList.remove("desaparecer")
    titulo.classList.add("aparecer")

})
