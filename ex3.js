// ## Exercício 3: Loops

// **Objetivo:** Praticar o uso de loops `for` e `while`.

// 1. Use um loop `for` para imprimir os números de 1 a 10.

// 2. Use um loop `while` para imprimir os números pares de 0 a 20.

// 3. Crie um array de nomes. Use um loop `for...of` para imprimir cada nome no console.

// 4. Crie um objeto com algumas propriedades (nome, idade, cidade). Use um loop `for...in` para imprimir cada chave e seu respectivo valor.


// 1.
console.log("Loop de 1 a 10:")
for (let num = 1;num<=10;num+=1) {
    console.log(num)
}

// 2.

console.log("-------------------------------")

console.log("Loop While número pares de 0 a 20:")
let numero = 0
while (numero < 21) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
    numero +=1
}

//3.
console.log("Lista de nomes com loop:")

let nomes = ["Nicolas","Jeovana","Walmir","Deny","Pedro"]
for (let nome of nomes) {
    console.log(nome)
}

//4.

console.log("Objeto com propriedades:")

let pessoa = {
    Nome: "Nicolas",
    Idade: 30,
    Cidade: "Joinville",
}
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}

