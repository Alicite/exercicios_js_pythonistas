let num1 = 15;
let num2 = 4;

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);


console.log(`num1 é maior que num2? ${num1 > num2}`);

console.log(`num1 é igual a num2? ${num1 === num2}`);

let nota = 85;

if (nota >= 90 && nota <= 100) {
  console.log("Classificação: A");
} else if (nota >= 80 && nota <= 89) {
  console.log("Classificação: B");
} else if (nota >= 70 && nota <= 79) {
  console.log("Classificação: C");
} else if (nota >= 60 && nota <= 69) {
  console.log("Classificação: D");
} else {
  console.log("Classificação: F");
}