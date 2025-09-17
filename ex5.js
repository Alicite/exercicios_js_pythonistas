let cores = ["azul", "roxo", "vermelho"];
cores.push("roxo");
cores.shift();
console.log(cores);

let livro = {
    titulo: "o ultimo romantico do mundo",
    autor: "pedro augusto",
    anoPublicacao: 2025
};
livro.genero = "romance";
console.log(livro.titulo);
console.log(livro.autor);

console.log(Object.keys(livro));
console.log(Object.values(livro));  