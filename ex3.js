for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let num = 0;
while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

const nomes = ["Mauricio", "Jeovana", "Duda", "Ruan"];
for (const nome of nomes) {
  console.log(nome);
}

const pessoa = {
  nome: "Rique",
  idade: 17,
  cidade: "Joinville"
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}