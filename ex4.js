function somar(a, b) {
return a + b;
}

function saudacao(nome) {
    return "Olá, " + nome + "!";
}


function ehpar(num) {
    return num % 2 === 0;
}

function aplicarOperacao(callback, a, b) {
return callback(a, b);
}

function subtrair (num1, num2) {
    return num1 - num2;
}

function multiplicar (num1, num2) {
    return num1 * num2;
}   

function dividir (num1, num2) {
    if (num2 === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    else {
        return num1 / num2;
    }
}

    op [somar, subtrair, multiplicar, dividir]
    for (f in op){
        console.log(aplicarOperacao(f, 10, 2));
    }
 



console.log(somar(5, 3));
console.log(saudacao("Jeovana")); 
console.log(ehpar(21)); 
console.log(ehpar(231)); 
console.log(ehpar(-42));

