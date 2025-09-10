function somar(a, b) {
return a + b;
}

function saudacao(nome) {
    return "Olá, " + nome + "!";
}


function ehpar(num) {
    return num % 2 === 0;
}

function aplicarOperacao(operacao, a, b) {
return operacao(a, b);
}





console.log(somar(5, 3));
console.log(saudacao("Jeovana")); 
console.log(ehpar(4)); 
console.log(ehpar(7)); 
console.log(aplicarOperacao(somar, 5, 20));
