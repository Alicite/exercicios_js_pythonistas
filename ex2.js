let num1 = 13;
let num2 = 22;

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);

console.log(`num1 > num2? ${num1 > num2}`);
console.log(`num1 === num2? ${num1 === num2}`);

let nota = 87;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota <= 89) {
    console.log("B");
} else if (nota >= 70 && nota <= 79) {
    console.log("C");
} else if (nota >= 60 && nota <= 69) {
    console.log("D");
} else if (nota >= 0 && nota <= 59) {
    console.log("F");
} else {
    console.log("REPETIU BURRO");
}