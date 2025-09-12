// Crie duas variáveis num1 e num2 com valores numéricos de
// sua escolha.
let num1 = 57
let num2 = 2

//Realize as quatro operações aritméticas básicas (+, -, *, /) 
//entre num1 e num2 e imprima os resultados.
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

//Verifique se num1 é maior que num2 e imprima o resultado.
console.log(num1 > num2)

//Verifique se num1 é igual a num2 usando o operador de 
// igualdade estrita (===) e imprima o resultado.
console.log(num1 === num2)

//Crie uma variável nota e atribua a ela um valor entre 0 e 100.
let nota = 100

/* Usando if/else if/else, imprima a classificação da nota:
90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
Abaixo de 60: "F" */
if (nota >= 90 && nota <= 100) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")
} else if (nota >= 70) {
    console.log("C")
} else if (nota >= 60) {
    console.log("D")
} else {
    console.log("F")
}