console.log("----ESCONDE ESCONDE----")
console.log()
for (let contfor = 1; contfor < 11; contfor+=1){
    console.log("Pedrinho das pequenas tranças: ", contfor);
}
    console.log("Pedrinho das pequenas tranças: Lá vou eu!!!")

console.log()
console.log()

console.log("----Números Pares----")
console.log()
let contwhile = 0;

while (contwhile < 21){
    console.log("Par:", contwhile);
    contwhile+=2;
}

console.log()
console.log()

console.log("----Lista----")
console.log()

let marcas = ["Nike", "Adidas", "Lacoste"]

for (marca of marcas){
    console.log("Marca: ", marca);
}
console.log()
console.log()

console.log("----Propriedades de um Objeto----")
console.log()

let carro = new Object()
    carro.marca = "Toyota"
    carro.modelo = "Corolla"
    carro.ano = "2011"
    carro.cor = "Prata"

console.log("Carro: ")
console.log()

for(caracteristicas in carro){
    console.log(caracteristicas, " = ", carro[caracteristicas]);
}
console.log()