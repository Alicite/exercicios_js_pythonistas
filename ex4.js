function somar(n1, n2) {
    return `${n1} + ${n2}  =  ${n1+n2}`
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

function subitrair(n1, n2){
    return `${n1} - ${n2} = ${n1-n2}`
}

function dividir(n1, n2){
    if(n2==0){
        return "Impossivel dividir por 0"
    } else {
        return `${n1} / ${n2} = ${n1/n2}`
    } 
    
}

function multiplicar(n1, n2){
    return `${n1} * ${n2} = ${n1*n2}`
}

console.log(aplicarOperacao(somar, 5, 5))
console.log(aplicarOperacao(subitrair, 5, 5))
console.log(aplicarOperacao(multiplicar, 5, 5))
console.log(aplicarOperacao(dividir, 5, 5))