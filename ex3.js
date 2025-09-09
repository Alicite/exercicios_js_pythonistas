const nomes = ["Ana", "Bruno", "Carla", "Diego"];
for (const nome of nomes) {
  console.log(nome);
}

console.log('---');

// 4. Objeto com propriedades e loop for...in para imprimir chave e valor
const pessoa = {
  nome: "Idenilson",
  idade: 39,
  cidade: "São Paulo"
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}