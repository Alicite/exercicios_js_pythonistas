let num1 = 18
let num2 = 22

const mult = (num1 * num2)
const sub = (num1 - num2)
const add = (num1 + num2)
const div = (num1 / num2)

console.log("Número 1: ", num1)
console.log("Número 2: ", num2)
console.log()

console.log("----OPERAÇÕES----")
console.log()
console.log("ADIÇÃO: ", num1, " + ", num2, " = ", (num1+num2))
console.log()
console.log("SUBTRAÇÃO: ", num1, " - ", num2, " = ", (num1-num2))
console.log()
console.log("MULTPLICAÇÃO: ", num1, " * ", num2, " = ", (num1*num2))
console.log()
console.log("DIVISÃO: ", num1, "/", num2, " = ", (num1/num2))
console.log()
console.log()

console.log("----COMPARAÇÃO----")
console.log()

const comparacao = (num1>num2)
    if (comparacao.false)
        console.log("Número 1 é menor que número 2.")

    else console.log("Número 1 é maior que número 2.")
console.log()

console.log("----TESTE DE IGUALDADE----")
console.log()

const igualdade = (num1 === num2)
    if (igualdade.true)
        console.log("Numero 1 é igual ao número 2.")
    else console.log("Numero 1 é diferente do número 2.")

console.log()

const nota = 34
console.log("Nota: ", nota)

if (nota>=90)
    console.log("nota A")

if (nota>=80 && nota<=89)
    console.log("Nota B")

if (nota>=70 && nota<=79)
    console.log("Nota C")

if (nota>=60 && nota<=69)
    console.log("Nota D")

if (nota<60)
    console.log("Nota F")