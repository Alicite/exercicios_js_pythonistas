for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let par = 0;
while (par <= 20) {
    if (par % 2 === 0) {
        console.log(par);
    }
    par++;
}

let nomes = ["manu", "pedro", "dima"];
for (let nome of nomes) {
    console.log(nome);
}

let pessoa = {
    nome: "cleo",
    idade: 48,
    cidade: "itaquaquecetuba"
};
for (let chave in pessoa) console.log(`${chave}: ${pessoa[chave]}`);