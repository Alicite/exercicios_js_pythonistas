let i = 0
console.log('Imprimindo [0 a 10] com FOR: ')
for (i = 0; i < 10+1; i++) {
    console.log(i)
}

let j = 0
console.log("")
console.log("Pares de 0 a 20")
while (j < 21) {
    if (j%2 === 0) {
        console.log(`${j} é par`)
    }
    j++
}
console.log("")
console.log("Imprimindo uma lista com for e of: ")
const nomes = [];
nomes.push("caio", "leandro", "Miguel", "Predo");

// for (var h = 0; h < nomes.length; h++) {
//     console.log(nomes[h])
// }

for (nome of nomes){
    console.log(nome)
}

console.log("")
console.log("Imprimindo um objeto usando for e in: ")
let pessoa = new Object();
pessoa.nome = "Caio";
pessoa.idade = 17;
pessoa.cidade = "Joinville";

for (a in pessoa) {
    console.log(`${a} da pessoa é: ${pessoa[a]}`)
}