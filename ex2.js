num1 = 9
num2 = 3

nota = 90

mais = (num1 + num2)
console.log(`O resultado da soma é: ${mais}`)

menos = (num1 - num2)
console.log(`O resultado da subtração é: ${menos}`)

multiplicacao = (num1 * num2)
console.log(`O resultado da multiplicação é: ${multiplicacao}`)

divisao = (num1 / num2)
console.log(`O resultado da divisão é: ${divisao}`)

if (num1 > num2)
    console.log("O número 1 é maior")
else 
    console.log("O número 2 é menor")

if (num1 === num2)
    console.log("Os números sao iguais")
else
    console.log("Os números são diferetes")


if (nota <= 60){
    console.log("A nota avaliada é considerada um : F")
}

if ((nota > 60) && (nota <= 69)){
    console.log("A nota avaliada é considerada um: D")
}

if ((nota > 69) && (nota <= 79)){
    console.log("A nota avaliada é considerada um: C")
}
    
if ((nota > 79) && (nota <= 89)){
    console.log("A nota avaliada é considerada um: B")
}
   
if ((nota > 89) && (nota <= 100)) {
    console.log("A nota avaliada é considerada um: A")
}