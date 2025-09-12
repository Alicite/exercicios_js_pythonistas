// Crie uma função chamada somar que receba dois números 
// como parâmetros e retorne a soma deles.
function somar(n1, n2) {
    return n1 + n2
}

// Crie uma função chamada saudacao que receba um nome como parâmetro 
// e imprima "Olá, [nome]!" no console. Use um parâmetro padrão para 
// o nome caso nenhum seja fornecido.
const saudacao = function(nome="Ximbica") {
    return `Olá, ${nome}!`
}

//Crie uma função ehPar que receba um número e 
//retorne true se for par e false se for ímpar.
const ehPar = num => num % 21 === 0 ? true : false
