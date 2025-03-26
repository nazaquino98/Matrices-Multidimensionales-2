const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let matriz = [];

function mostrarMenu() {
    console.log("\n--- Menú ---");
    console.log("1. Ingresar nueva persona");
    console.log("2. Mostrar todos los datos");
    console.log("3. Filtrar por DNI");
    console.log("4. Salir");
    rl.question("Elige una opción: ", opcion => {
        if (opcion === "1") ingresarPersona();
        else if (opcion === "2") mostrarTodos();
        else if (opcion === "3") filtrarPorDni();
        else if (opcion === "4") {
            console.log("Saliendo...");
            rl.close();
        } else {
            console.log("Opción no válida");
            mostrarMenu();
        }
    });
}

function ingresarPersona() {
    rl.question("Ingresa el nombre: ", nombre => {
        rl.question("Ingresa el apellido: ", apellido => {
            rl.question("Ingresa el DNI: ", dni => {
                rl.question("Ingresa los teléfonos separados por comas: ", telefonos => {
                    rl.question("Ingresa los nombres de los hijos separados por comas: ", hijos => {
                        matriz.push([nombre, apellido, dni, telefonos.split(","), hijos.split(",")]);
                        console.log("Persona agregada.");
                        mostrarMenu();
                    });
                });
            });
        });
    });
}

function mostrarTodos() {
    console.log("\nPersonas registradas:");
    matriz.forEach(persona => {
        console.log(`${persona[0]} ${persona[1]}, DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`);
    });
    mostrarMenu();
}

function filtrarPorDni() {
    rl.question("Ingresa el DNI para filtrar: ", dniBuscado => {
        const persona = matriz.find(p => p[2] === dniBuscado);
        if (persona) {
            console.log(`\nDatos de ${persona[0]} ${persona[1]}:`);
            console.log(`DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`);
        } else {
            console.log("No se encontró una persona con ese DNI.");
        }
        mostrarMenu();
    });
}

mostrarMenu();
