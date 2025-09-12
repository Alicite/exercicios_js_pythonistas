function somar(num1, num2) {
    return `${num1} + ${num2}  =  ${num1+num2}`
}
console.log("")
console.log("Função somar")
console.log(somar(1, 1))

function saudacao(nome = "visitante") {
    return `Olá ${nome}`
}
console.log("")
console.log("Função saudação")
console.log(saudacao("Caio"))

function ehPar(number) {
    if (number%2 === 0) {
        return `O número ${number} é Par`
    } else {
        return `O número ${number} é Impar`
    }
}

console.log("")
console.log("Função ehpar")
console.log(ehPar(8))

function aplicarOperacao(callback, n1, n2){
    return callback(n1, n2)
}

function subitrair(num1, num2){
    return `${num1} - ${um2} = ${num1-num2}`
}

function dividir(num1, num2){
    if(num2==0){
        return "Impossivel dividir por 0"
    } else {
        return `${num1} / ${um2} = ${num1/num2}`
    } 
    
}

function multiplicar(num1, num2){
    return `${num1} * ${um2} = ${num1*num2}`
}

op = [somar, subitrair, multiplicar, dividir]
for (f in op){
    console.log(aplicarOperacao(f, 5, 5))
}
console.log(aplicarOperacao(somar, 5, 5))
console.log(aplicarOperacao(subitrair, 5, 5))
console.log(aplicarOperacao(multiplicar, 5, 5))
console.log(aplicarOperacao(dividir, 5, 5))