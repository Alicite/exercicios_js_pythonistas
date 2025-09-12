for(let num = 1;num <= 10;num+=1) {
    console.log(num)
}

let numero = 0
while (numero < 21) {
    if (numero % 2 == 0) {
        console.log(numero)
    }
    numero += 1
}
let nomes = ["Nicolas", "Jeovana", "Walmir", "Deny", "Pedro"]
for (let nome of nomes) {
    console.log(nome)
}
let pessoa = {
    nome: "Leticia",
    idade: 30,
    Cidade: "Paris"
}
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}