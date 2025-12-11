const botones = document.querySelectorAll(".sidebar-btn");

botones.forEach(btn => {
    btn.addEventListener("click", () => {

        // Quita activo de todos
        botones.forEach(b => b.classList.remove("activo"));

        // Activa el que tocaste
        btn.classList.add("activo");
    });
});
