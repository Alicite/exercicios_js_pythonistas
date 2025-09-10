function somar(num1, num2) {
    console.log(`${num1} + ${num2}  =  ${num1+num2}`)
}
console.log("")
console.log("Função somar")
somar(1, 1)

function saudacao(nome) {
    console.log(`Olá ${nome}`)
}
console.log("")
console.log("Função saudação")
saudacao("Caio")

function ehPar(number) {
    if (number%2 === 0) {
        console.log(`O número ${number} é Par`)
    } else {
        console.log(`O número ${number} é Impar`)
    }
}

console.log("")
console.log("Função ehpar")
ehPar(8)