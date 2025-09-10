// ## Exercício 2: Operadores e Condicionais

// **Objetivo:** Utilizar operadores aritméticos, de comparação e lógicos, e estruturas condicionais (`if/else if/else`).

// 1. Crie duas variáveis `num1` e `num2` com valores numéricos de sua escolha.

// 2. Realize as quatro operações aritméticas básicas (`+`, `-`, `*`, `/`) entre `num1` e `num2` e imprima os resultados.

// 3. Verifique se `num1` é maior que `num2` e imprima o resultado.

// 4. Verifique se `num1` é igual a `num2` usando o operador de igualdade estrita (`===`) e imprima o resultado.

// 5. Crie uma variável `nota` e atribua a ela um valor entre 0 e 100.

// 6. Usando `if/else if/else`, imprima a classificação da nota:
//   - 90-100: "A"
//   - 80-89: "B"
//   - 70-79: "C"
//   - 60-69: "D"
//   - Abaixo de 60: "F"

// 1. Crie duas variáveis `num1` e `num2` com valores numéricos de sua escolha.

let num1 = 2;
let num2 = 4;

// 2. Realize as quatro operações aritméticas básicas (`+`, `-`, `*`, `/`) entre `num1` e `num2` e imprima os resultados.

console.log ("soma:", num1 + num2);
console.log ("subtração:", num1 - num2);
console.log ("multiplicação:", num1 * num2);
console.log ("divisão:", num1 / num2);

// 3. Verifique se `num1` é maior que `num2` e imprima o resultado.

console.log("Verificar se num1 é maior que num2:",num1 > num2);

// 4. Verifique se `num1` é igual a `num2` usando o operador de igualdade estrita (`===`) e imprima o resultado.

console.log("Verificar igualdade:", num1 === num2);

// 5. Crie uma variável `nota` e atribua a ela um valor entre 0 e 100.

let nota = 100

// 6. Usando `if/else if/else`, imprima a classificação da nota:
//   - 90-100: "A"
//   - 80-89: "B"
//   - 70-79: "C"
//   - 60-69: "D"
//   - Abaixo de 60: "F"

if (nota >= 90 && nota <= 100) {
    console.log("Nota: A");
} else if (nota >= 80) {
    console.log("Nota: B");
}else if (nota >= 70) {
    console.log("Nota: C");
}else if (nota >= 60) {
    console.log("Nota: D");
}else {
    console.log("Nota: F")
}

