function somar(a1, b1) {

    return a1 + b1;
}
console.log(2,3)


const saudacao = function(nome="Darthvader"){
    return `Olá, ${nome}`
    
}

const ehPar = a1 => a1 % 2 === 0 ? true : false
console.log(ehPar(21))
console.log(ehPar(30))
console.log(ehPar(-52))

function aplicarOperacao(callback, a1, b1){
    return callback(a1, b1)
}

function subtrair(a1, b1){
    return a1 - b1
}

function multiplicar(a1 , b1){
    return a1 * b1
}

function dividir(a1, b1){
    if(b1 === 0){
        return "Impossivel dividir por 0!"
    }else {
            return a1 / b1
        }
    }


op = [somar, subtrair, multiplicar.dividir]
for (f in op) {
    console.log(aplicarOperacao(somar, 5, 2))
    console.log(aplicarOperacao(subtrair, 5, 2))
    console.log(aplicarOperacao(multiplicar, 5, 2))
    console.log(aplicarOperacao(dividir, 5, 2))
}