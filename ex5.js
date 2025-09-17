// 1. Crie um array chamado `cores` com pelo menos 3 cores.
const cores = ["azul", "vermelho", "verde"];
console.log(cores)

// 2. Adicione uma nova cor ao final do array.
cores.push("amarelo");

// 3. Remova a primeira cor do array.
cores.shift();

// 4. Imprima o array resultante.
console.log("Array de cores:", cores);

// 5. Crie um objeto `livro` com as propriedades `titulo`, `autor` e `anoPublicacao`.
let livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
};

// 6. Adicione uma nova propriedade `genero` ao objeto `livro`.
livro.genero = "Romance";

// 7. Imprima o `titulo` e o `autor` do livro.
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);

// 8. Use `Object.keys()` e `Object.values()` para imprimir as chaves e os valores do objeto `livro`.
console.log("Chaves do objeto livro:", Object.keys(livro));
console.log("Valores do objeto livro:", Object.values(livro));