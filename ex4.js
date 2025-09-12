// 1. Crie uma função chamada 'somar' que receba dois números como parâmetros e retorne a soma deles.
function somar(num1, num2){
    return num1 + num2
}
console.log(somar(2,3))

// 2. Crie uma função chamada 'saudação' que receba um nome como parâmetro e imprima "Olá, [nome]!" no console. 
// Use um parâmetro padrão para o nome caso nenhum seja fornecido.
const saudacao = function(nome="Ximbica") {
    return `Olá, ${nome}!`
}
console.log(saudacao())
console.log(saudacao("Amanda"))

// 3. Crie uma função 'ehPar' que receba um número e retorne 'true' se for par e 'false' se for ímpar.
const ehPar = num => num % 2 === 0 ? true : false
console.log(ehPar(21))
console.log(ehPar(30))
console.log(ehPar(-52))

// 4. Crie uma função de alta ordem 'aplicarOperacao' que receba uma função (callback) e dois números. 
// Ela deve executar a função callback com os dois números e retornar o resultado.
function aplicarOperacao(callback, n1, n2){
    return callback(n1,n2)
}
function subtrair(num1,num2){
    return num1-num2
}
function multiplicar(num1,num2){
    return num1 * num2
}
function dividir(num1,num2){
    if (num2 == 0){
        return "Impossível dividir por 0!"
    } else {
    return num1 / num2
    }
}

op = [somar, subtrair, multiplicar, dividir]
for (f in op) {
    console.log{aplicarOperacao(f, 5, 2)}
}