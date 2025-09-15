for (let num = 1;num <= 10;num +=1){
    console.log(num)
}

let numero = 0
while (numero < 21) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
    numero += 2
}

let nomes = ["Deny","walmir","Jeovana"]
for (let nome of nomes) {
    console.log(nome)
}

let pessoa = {
    nome: "Idenilson",
idade: 39,
cidade: "Joinville"
 }
 for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
 }