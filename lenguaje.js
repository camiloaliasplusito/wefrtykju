// Clave de acceso
const claveAcceso = "31161981@";

// Función para redirigir con clave de acceso
    function redirigirConClave(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const claveIngresada = prompt("Ingrese la clave para obtener acceso:");
    if (claveIngresada === claveAcceso) {
        // Redirigir a la siguiente página
        window.location.href = e.currentTarget.getAttribute("href");
    } else {
        alert("Clave incorrecta. Inténtelo de nuevo.");
    }
}

// Obtener todos los enlaces protegidos
const enlacesProtegidos = document.querySelectorAll(".protected-link");

// Agregar eventos de clic a todos los enlaces protegidos
enlacesProtegidos.forEach(enlace => {
    enlace.addEventListener("click", redirigirConClave);
});
