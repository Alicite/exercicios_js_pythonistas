console.log("----SOMANDO----")
console.log()

function somar(){
    n1 = 5
    n2 = 10
    console.log(n1, " + ", n2, " = ", n1+n2)
}

somar()

console.log()
console.log()

console.log("----SAUDAÇÃO----")
console.log()

nome = "Leandro"

function saudacao(chamanome){
    console.log("Olá, ",chamanome,"!")
}

saudacao(nome)

console.log()
console.log()

console.log("----VERIFICANDO SE É PAR----")
console.log()

num = 2

function ehpar(ehonoeh){
    console.log("Número: ", num)
    console.log()
    ehonoeh = (num % 2 === 0)
    console.log(ehonoeh)
}

ehpar(num)
console.log()