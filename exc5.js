console.log("----CORES----")
console.log()

let cores = [`Verde`, `Roxo`, `Azul`]

cores.push(`Amarelo`)
cores.shift([0])
console.log(cores)
console.log()
console.log()

console.log("----LIVRO----")
console.log()

let livro = {
    titulo : "Para Todas as Garotas Que Eu Já Peguei",
    autor : "Pedro Algusto Rodrigues da Silva",
    anoPublicacao : 2025
}

livro.genero = "Conto de Fadas"


let chaves = Object.keys(livro)
let valores = Object.values(livro)

for (let i = 0; i < valores.length; i += 1){
    console.log(`${chaves[i]} : ${valores[i]}`)
}

// for (let chave of Object.keys(livro)) {
//     console.log(`${chave}: ${livro[chave]}`)
// }

// chaves.forEach(chave => console.log(`${chave} : ${livro[chave]}`))
