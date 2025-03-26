# Lista donde se almacenaran las personas
matriz = []

def mostrar_menu():
    print("\nMenu:")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")
    
    opcion = input("Elige una opción: ")
    
    if opcion == "1":
        ingresar_persona()
    elif opcion == "2":
        mostrar_todos()
    elif opcion == "3":
        filtrar_por_dni()
    elif opcion == "4":
        print("Saliendo...")
    else:
        print("Opcion no valida")
        mostrar_menu()

def ingresar_persona():
    nombre = input("Ingresa el nombre: ")
    apellido = input("Ingresa el apellido: ")
    dni = input("Ingresa el DNI: ")
    telefono = input("Ingresa el numero de telefono/s separados por comas en caso de tener mas de uno: ")
    hijos = input("Ingresa los nombres de los hijos separados por comas en caso de tener mas de uno: ")
    
    # Se guarda la persona como una lista dentro de la lista principal (matriz)
    matriz.append([nombre, apellido, dni, telefono.split(","), hijos.split(",")])
    
    print("Persona agregada exitosamente")
    mostrar_menu()

def mostrar_todos():
    print("\nPersonas registradas:")
    for persona in matriz:
        print(f"Nombre: {persona[0]}, Apellido: {persona[1]}, DNI: {persona[2]}, Telefono/s: {', '.join(persona[3])}, Hijos: {', '.join(persona[4])}")
    mostrar_menu()

def filtrar_por_dni():
    dni_buscado = input("Ingresa el DNI: ")
    persona = next((p for p in matriz if p[2] == dni_buscado), None)
    
    if persona:
        print(f"\nPersona encontrada:")
        print(f"Nombre: {persona[0]}, Apellido: {persona[1]}, DNI: {persona[2]}, Telefono/s: {persona[3]}, Hijos: {', '.join(persona[4])}")
    else:
        print("No se encontro una persona con ese DNI")
    
    mostrar_menu()

# Llamar a la funcion para mostrar el menu
mostrar_menu()
