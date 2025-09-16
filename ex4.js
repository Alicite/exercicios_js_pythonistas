function soma(a, b) {
  return a + b;
}

function identificacao(nome = "visitante") {
  console.log(`Ola, ${nome}!`);
}

function ePar(numero) {
  return numero % 2 === 0;
}

function aplicarOperacao(callback, num1, num2) {
  return callback(num1, num2);
}