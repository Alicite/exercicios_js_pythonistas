//Use um loop for para imprimir os números de 1 a 10.
for (let num = 1;num <= 10;num += 1) {
    console.log(num)
}

//Use um loop while para imprimir os números pares de 0 a 20.
let numero = 0
while (numero < 21) {
    console.log(numero)
    numero += 2
}

//Crie um array de nomes. Use um loop for...of para
// // imprimir cada nome no console.
let nomes = ["Nicolas", "Jeovana", "Walmir", "Deny", "Pedro"]
for (let nome of nomes) {
    console.log(nome)
}

//Crie um objeto com algumas propriedades (nome, idade, cidade).
// Use um loop for...in para imprimir cada chave e seu respectivo
// valor.
let pessoa = {
    nome: "Leticia",
    idade: 18,
    cidade: "Paris"
}
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}