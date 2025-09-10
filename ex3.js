for (let num = 1;num <= 10; num+=1) {
    console.log(num)
}

let numero = 0
while(numero < 21) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
    numero += 1

}

let nomes = ["JHON WICK", "DOG", "CARA", "LAPIS", "CARRO"]
for (let nome of nomes) {
    console.log(nome)
}

let pessoa = {
    nome: "Jhon Wick",
    idade: 30,
    cidade: "Nova Yoker"
}
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}