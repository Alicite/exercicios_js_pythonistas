// // Crie um array chamado cores com pelo menos 3 cores.
// const cores = ['azul', 'vermelho', 'verde'];

// // Adicione uma nova cor ao final do array.
// cores.push("branco");
// cores.unshift("preto");

// // Remova a primeira cor do array.
// cores.shift()
// cores.pop()

// // Imprima o array resultante.
// console.log(cores);

// Crie um objeto livro com as propriedades titulo, autor e anoPublicacao.
const livro = {
    titulo: 'O senhor dos anéis',
    autor: 'J. R. R. Tolkien',
    anoPublicacao: 1954
};
// console.log(livro)

// Adicione uma nova propriedade genero ao objeto livro.
livro.genero = "Fantasia"
livro['numeroDePaginas'] = 1568
// console.log(livro)

// // Imprima o titulo e o autor do livro.
// console.log(livro.titulo)
// console.log(livro.autor)

// // Use Object.keys() e Object.values() para 
// // imprimir as chaves e os valores do objeto livro.
// const chaves = Object.keys()
// const valores = Object.values()

// for (let i = 0; i < chaves.length; i += 1) {
//     console.log(`${chaves[i]}: ${valores[i]}`)
// }

for (let [chave, valor] of Object.entries(livro)) {
    console.log(`${chave}: ${valor}`)
}