//exerccio111
i = 1
for (let i = 1; i < 11; i++) {
    console.log(i);
}
//EXERCICIO 222
for (let i = 1; i < 21; i++) {
    if (i % 2 === 0)
        console.log(`É par ${i}`);
}

//execicio 333
// criando ARRAY
const nomeArray = ["Miguel", "caio", "Pedro", "Leandor", "Kaio"];

for (const nome of nomeArray){
    console.log(nome)
}
//parte 4
let pessoal = {
    nome: "Miguel",
    idade: "17",
    cidade: "Joinville"
};

for (let pessoa in pessoal){
    console.log(`${pessoa}: ${pessoal[pessoa]}`)
}
    
