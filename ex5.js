// 1. Crie um array chamado `cores` com pelo menos 3 cores.

// 1. Adicione uma nova cor ao final do array.

// 1. Remova a primeira cor do array.

// 1. Imprima o array resultante.

// 1. Crie um objeto `livro` com as propriedades `titulo`, `autor` e `anoPublicacao`.

// 1. Adicione uma nova propriedade `genero` ao objeto `livro`.

// 1. Imprima o `titulo` e o `autor` do livro.

// 1. Use `Object.keys()` e `Object.values()` para imprimir as chaves e os valores do objeto `livro`.

let cores = ["Amarelo", "verde, azul"]
cores.push("Rosa")
console.log(cores)
cores.shift()
console.log(cores)

let livro = {
    titulo: "Pequeno Principe",
    autor: "Não sei",
    anoPublicacao: "2013"
}

livro.genero = "Aventura"
console.log(livro.titulo)
console.log(livro.autor)

// fiz junto com o leandro por isso está igual daqui pra frente
console.log("")
console.log("Saida com for e Object: ")
console.log("")

let chaves = Object.keys(livro)
let valores = Object.values(livro)

for (let i = 0; i < valores.length; i += 1){
    console.log(`${chaves[i]} : ${valores[i]}`)
}

// for (let chave of Object.keys(livro)) {
//     console.log(`${chave}: ${livro[chave]}`)
// }

// chaves.forEach(chave => console.log(`${chave} : ${livro[chave]}`))

