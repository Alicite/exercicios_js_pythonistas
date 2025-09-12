// ## Exercício 4: Funções

// **Objetivo:** Criar e utilizar funções, incluindo parâmetros e retorno de valores.

// 1. Crie uma função chamada `somar` que receba dois números como parâmetros e retorne a soma deles.

// 2. Crie uma função chamada `saudacao` que receba um nome como parâmetro e imprima "Olá, [nome]!" no console. Use um parâmetro padrão para o nome caso nenhum seja fornecido.

// 3. Crie uma função `ehPar` que receba um número e retorne `true` se for par e `false` se for ímpar.

// 4. Crie uma função de alta ordem `aplicarOperacao` que receba uma função (callback) e dois números. Ela deve executar a função callback com os dois números e retornar o resultado.


// 1.

function somar(n1, n2) {
    return n1 + n2
}
console.log(somar(2,3))
// 2.

const saudacao = function(nome="Ximbica") {
    return `Olá, ${nome}!`
}
console.log(saudacao())
console.log(saudacao("Nico"))

// 3.

const ehPar = num => num % 2 === 0 ? true : false
console.log(ehPar(21))
console.log(ehPar(30))
console.log(ehPar(-52))

// 4.

function aplicarOperacao(callback, n1, n2){
    return callback(n1,n2)
}

function subtrair(num1,num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1,num2){
    if (num2 === 0){
        return  "Impossível dividir por 0!"
    } else {
        return num1 / num2
    }
}
