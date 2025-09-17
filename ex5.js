const cores = ['azul','vermelho','verde'];
cores = [2,3,4]
console.log(cores);

cores.push("branco");
cores.unshift("preto");
console.log(cores);

cores.shift()
cores.pop()
console.log(cores);

const livro = {
    titulo:'O senhr dos anéis',
    'autor': ' J. R. R. Tolkien',
    anoPublicacao: 1954
};

console.log(livro)

livro.genero = "Fantasia"
livro['numeroDePaginas'] = 1568
console.log(livro)

console.log(livro.titulo)
console.log(livro.autor)

const chaves = Object.keys()
const valores = Object.values()

for (let i = 0; i < chaves.length; i += 1){
    console.log(`${chaves[i]}: ${valores[i]}`)
}