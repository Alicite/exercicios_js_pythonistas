function somar(a, b) {
    return a + b;
}

function saudacao(nome = "Visitante") {
    console.log(`Olá, ${nome}!`);
}

function ehPar(num) {
    return num % 2 === 0;
}

function aplicarOperacao(callback, x, y) {
    return callback(x, y);
}

console.log(somar(5, 3));
saudacao("manu amor do");
saudacao();
console.log(ehPar(4));    
console.log(ehPar(7)); 
console.log(aplicarOperacao(somar, 10, 20));