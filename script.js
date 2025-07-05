// Con esta funcion pedimos un número al usuario y validamos que sea un número válido
function pedirNumero(mensaje) {
    let numero;
    let entradaValida = false;

    
    while (!entradaValida) {  // Este ciclo se repetirá para pedir un número hasta que sea válido
        const entrada = prompt(mensaje);

        if (entrada === null) {  // Con este IF es para volver a pedir el numero si el usuario da en CANCELAR 
            alert("¡Debes ingresar un número para continuar!");
            continue;
        }
        numero = Number(entrada);   

        if (!isNaN(numero) && entrada.trim() !== "") {  // Validamos si es un número y no está vacío
            entradaValida = true; 
        } else {
            alert("Eso no es un número válido. Intenta de nuevo.");
        }
    }
    return numero;
}

// Aqui pedimos los 3 números al usuario
const numero1 = pedirNumero("Escribe el primer número:");
const numero2 = pedirNumero("Escribe el segundo número:");
const numero3 = pedirNumero("Escribe el tercer número:");

// Visualizacion en la consola
console.log("Números ingresados:", numero1, numero2, numero3);

// visualizacion en el DOM 
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `<p>Números ingresados: ${numero1}, ${numero2}, ${numero3}</p>`;

// Variables para almacenar los números mayor, intermedio y menor
let mayor, intermedio, menor;

if (numero1 === numero2 && numero2 === numero3) { // Aqui verificamos si los tres son iguales
    console.log("Los tres números son iguales:", numero1, numero2, numero3);
} else {
    if (numero1 >= numero2 && numero1 >= numero3) {  // Con este IF se busca cual es el mayor
        mayor = numero1;

        if (numero2 >= numero3) { // Con otro IF buscamos el intermedio y menor entre numero2 y numero3
            intermedio = numero2;
            menor = numero3;
        } else {
            intermedio = numero3;
            menor = numero2;
        }
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;

        if (numero1 >= numero3) { // En este IF buscamos el intermedio y menor entre numero1 y numero3
            intermedio = numero1;
            menor = numero3;
        } else {
            intermedio = numero3;
            menor = numero1;
        }
    } else {
        mayor = numero3;

        if (numero1 >= numero2) { // Con este IF buscamos el intermedio y menor entre numero1 y numero2
            intermedio = numero1;
            menor = numero2;
        } else {
            intermedio = numero2;
            menor = numero1;
        }
    }

    // visualizacion en consola 
    console.log("Mayor a menor:", mayor, intermedio, menor);
    console.log("Menor a mayor:", menor, intermedio, mayor);

    // visualizacion en el DOM
    resultadoDiv.innerHTML += `<p>De mayor a menor: ${mayor}, ${intermedio}, ${menor}</p>`;
    resultadoDiv.innerHTML += `<p>De menor a mayor: ${menor}, ${intermedio}, ${mayor}</p>`;
}






