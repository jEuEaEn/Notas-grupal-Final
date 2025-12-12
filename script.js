
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









//iniciar sesion
document.getElementById("Iniciar sesion").addEventListener("click", function () {
    window.location.href = "login.html"; // aquí va el archivo al que quieres ir
});

//Registrarse
document.getElementById("Registrarse").addEventListener("click", function () {
    window.location.href = "register.html"; // aquí va el archivo al que quieres ir
});



const toggleBtn = document.getElementById("toggleView");
const viewIcon = document.getElementById("viewIcon");

let Conteo = 1

let modoVista = "lista"; // modo inicial

toggleBtn.
    if ( ) {
        // Cambiar a vista de cuadritos
        modoVista = "cuadricula";
        tablon.classList.remove("lista");
        tablon.classList.add("cuadricula");
        viewIcon.src = "./imagenes/Cuadritos.png"; // icono cuadritos
    } else {
        // Cambiar a vista de lista
        modoVista = "lista";
        tablon.classList.remove("cuadricula");
        tablon.classList.add("lista");
        viewIcon.src = "./imagenes/Tablones.png"; // icono lista
    }
});
