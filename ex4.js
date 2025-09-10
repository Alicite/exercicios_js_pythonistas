function somar(a, b) {
  return a + b;
}

function saudacao(nome = 'amigo') {
  console.log(`Olá, ${nome}!`);
}

function ehPar(num) {
  return num % 2 === 0;
}

function aplicarOperacao(callback, num1, num2) {
  return callback(num1, num2);
}

const resultado = aplicarOperacao(somar, 5, 7);
console.log(resultado); 