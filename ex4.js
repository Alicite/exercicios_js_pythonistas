function somar(n1, n2) {
    return n1 + n2
}
console.log(somar(22,3))

const sadacao = function(nome="Ximbica") {
    return `Olá, ${nome}!`
}

const ehPar = num => num % 2 === 0 ? true : false
console.log(ehPar(21))
console.log(ehPar(231))
console.log(ehPar(-52))

function aplicarOperacao(callback,n1,n2) {
    return callback(n1,n2)

}

function subtrair(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    if (num2 === 0) {
        return "Impossível dividir por 0!"
    } else {
        return num1 / num2
    }
}

