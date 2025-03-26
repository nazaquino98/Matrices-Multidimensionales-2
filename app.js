const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let matriz = [];

function mostrarMenu() {
    console.log("\n Menu:");
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
            console.log("Opcion no valida");
            mostrarMenu();
        }
    });
}

function ingresarPersona() {
    rl.question("Ingresa el nombre: ", nombre => {
        rl.question("Ingresa el apellido: ", apellido => {
            rl.question("Ingresa el DNI: ", dni => {
                rl.question("Ingresa tu numero de telefono/s separados por comas en caso de tener mas de uno: ", telefono => {
                    rl.question("Ingresa los nombres de tus hijos separados por comas en caso de tener mas de uno: ", hijos => {
                        matriz.push([nombre, apellido, dni, telefono.split(","), hijos.split(",")]);
                        console.log("Persona agregada exitosamente");
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
        console.log(`Nombre: ${persona[0]}, Apellido: ${persona[1]}, DNI: ${persona[2]}, Telefono/s: ${persona[3].join(", ")}, Hijos: ${persona[4].join(", ")}`);
    });
    mostrarMenu();
}

function filtrarPorDni() {
    rl.question("Ingresa el DNI: ", dniBuscado => {
        const persona = matriz.find(p => p[2] === dniBuscado);
        if (persona) {
            console.log("\nPersona encontrada:");
            console.log(`Nombre: ${persona[0]}, Apellido: ${persona[1]}, DNI: ${persona[2]}, Telefono/s: ${persona[3].join(", ")}, Hijos: ${persona[4].join(", ")}`);
        } else {
            console.log("No se encontro una persona con ese DNI.");
        }
        mostrarMenu();
    });
}

mostrarMenu();
