let num1 = 35
let num2 = 20
console.log("*********Operações***************")
console.log(`${num1} - ${num2}  =  ${num1-num2}`)
console.log(`${num1} + ${num2}  =  ${num1+num2}`)
console.log(`${num1} * ${num2}  =  ${num1*num2}`)
console.log(`${num1} / ${num2}  =  ${num1/num2}`)

console.log("")
console.log("*********Validações**************")
if (num1>num2) {
    console.log(`${num1} é maior que  ${num2}`)
}
else {
    console.log(`${num1} é menor que  ${num2}`)
}

if (num1===num2) {
    console.log(`${num1} é igual a ${num2}`)
}
else {
    console.log(`${num1} não é igual a ${num2}`)
}

const nota = 80
console.log("")
console.log("*********Classificação***********")
if (nota>90 && nota<100) {
    console.log(`Classificação de ${nota}  é A`)
} else if (nota>= 80 && nota <=89) {
    console.log(`Classificação de ${nota}  é B`)
} else if (nota>=70 && nota<=79) {
    console.log(`Classificação de ${nota}  é C`)
} else if (nota>=60 && nota <= 69) {
    console.log(`Classificação de ${nota}  é D`)
} else {
    console.log(`Classificação de ${nota}  é F`)
}
