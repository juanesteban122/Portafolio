//asegurar que el documento cargo correctamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces del menú
    //crear una variable links, donde recibe la informacion del listado
    var links = document.querySelectorAll(".navbar ul li a");

    // Agregar un evento de clic a cada enlace
    //Itera sobre cada enlace y agrega un evento de clic
    links.forEach(function(link) {
        //la acción que se ejecuta cuando se haga clic en un enlace.
        link.addEventListener("click", function() {
            // Ocultar el menú al hacer clic en un enlace
            var menuCheckbox = document.getElementById("menu");
            //Verificar si el menu esta abierto, y, si es así, lo cierra
            if (menuCheckbox.checked) {
                menuCheckbox.checked = false;
            }
        });
    });
});


////Descargar archivo, Hoja de vida
document.getElementById('botonDescarga').addEventListener('click', function() {
    window.location.href = 'hoja_de_vida.docx';
});

