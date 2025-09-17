// 1. Crie um array chamado `cores` com pelo menos 3 cores.
const cores = ["azul", "vermelho", "verde"];

// 2. Adicione uma nova cor ao final do array.
cores.push("preto");
cores.unshift("branco");

// 3. Remova a primeira cor do array.
cores.shift()
cores.pop()

// 4. Imprima o array resultante.
console.log("Array de cores:", cores);

// 5. Crie um objeto `livro` com as propriedades `titulo`, `autor` e `anoPublicacao`.
const livro = {
    titulo: "Por lugares incríveis",
    autor: "Jennifer Niven",
    anoPublicacao: 2015
};

// 6. Adicione uma nova propriedade `genero` ao objeto `livro`.
livro.genero = "Romance";
livro["numeroDePaginas"] = 355
console.log(livro)

// 7. Imprima o `titulo` e o `autor` do livro.
console.log(livro.titulo)
console.log(livro.autor)

// 8. Use `Object.keys()` e `Object.values()` para imprimir as chaves e os valores do objeto `livro`.
console.log(Object.keys(livro))
console.log(Object.values(livro))