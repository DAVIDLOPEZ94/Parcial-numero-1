function sumDivisores(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma;
}

function sonAmigos(num1, num2) {
    const suma1 = sumDivisores(num1);
    const suma2 = sumDivisores(num2);
    return suma1 === num2 && suma2 === num1;
}

// Solicitar al usuario que ingrese los números
const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));

// Verificar si los números son amigos
if (sonAmigos(num1, num2)) {
    alert(`${num1} y ${num2} son números amigos.`);
} else {
    alert(`${num1} y ${num2} no son números amigos.`);
}
