let num1 = 18
let num2 = 22

const mult = (num1 * num2)
const sub = (num1 - num2)
const add = (num1 + num2)
const div = (num1 / num2)
console.log(mult, sub, add,div)

const comparacao = boolean(num1>num2)
    if (comparacao.false)
        console.log("Número 1 é menor que número 2.")

    else console.log("Número 1 é maior que número 2.")

const igualdade = boolean(num1 === num2)
    if (igualdade.true)
        console.log("Numero 1 é igual ao número 2.")
    else console.log("Numero 1 é diferente do número 2.")

const nota = 34

let notaA = nota.boolean(nota>=90)
    console.log("nota A")

let notaB = nota.boolean(nota>=80, nota<=89)
    console.log("nota B")

let notaC = nota.boolean(nota>=70, nota<=79)
    console.log("nota C")

let notaD = nota.boolean(nota>=60, nota<=69)
    console.log("nota D")

let notaF = nota.boolean(nota<60)
    console.log("nota F")

