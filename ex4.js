const { useCallback } = require("react");

function soma(num1, num2) {
  return (`A soma dos dois números é: ${num1 + num2}`);
}
console.log(soma(1,4))

///parte 2222

function saudacao(nome) {
return (`Olá, ${nome}!`);
}
console.log(saudacao("Miguel lindo"))

///partew 3333
function ehpar(num){
    return (`O número é: ${num % 2 === 0}`)
}
console.log(ehpar(52))

//parte 444444
function aplicarOperacao(callback, num11, num22){
    return callback (num11, num22);
    

}
function somarV2(a, b) {
    return a + b;
}

let resultadoSoma = aplicarOperacao(somarV2, 5, 3);
console.log(`Soma: ${resultadoSoma}`);
