// Función para lanzar los dados y mostrar el resultado
function lanzarDados() {
    // Generar números aleatorios entre 1 y 6 para simular los resultados de los dados
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // Calcular el total de los dados
    let total = dado1 + dado2;

    // Mostrar los resultados utilizando alert
    alert("Dado 1: " + dado1 + "\nDado 2: " + dado2 + "\nTotal: " + total);
}

// Función principal para iniciar el juego
function iniciarJuego() {
    // Mostrar un mensaje de bienvenida
    alert("¡Bienvenido al juego de dados!");

    // Ciclo para permitir al usuario lanzar los dados varias veces
    while (true) {
        // Preguntar al usuario si quiere lanzar los dados
        let respuesta = prompt("¿Quieres lanzar los dados? (Sí/No)");

        // Convertir la respuesta a minúsculas para hacerla no sensible a mayúsculas
        respuesta = respuesta.toLowerCase();

        // Verificar si el usuario quiere lanzar los dados
        if (respuesta === "sí" || respuesta === "si") {
            // Lanzar los dados
            lanzarDados();
        } else if (respuesta === "no") {
            // Mostrar un mensaje de despedida y salir del juego
            alert("Gracias por jugar. ¡Hasta luego!");
            break;
        } else {
            // Mostrar un mensaje de error si la respuesta no es válida
            alert("Por favor, responde con 'Sí' o 'No'.");
        }
    }
}

// Iniciar el juego al cargar la página
iniciarJuego();
