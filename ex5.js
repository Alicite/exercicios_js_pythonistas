let cores = ["azul", "vermelho", "verde"];
cores.unshift("roxo"); 
cores.pop(); 
console.log("Lista atualizada de cores:", cores);

let livro = {
  titulo: "Memórias Póstumas de Brás Cubas",
  autor: "Machado de Assis",
  anoPublicacao: 1881
};


livro.anoPublicacao = 1882;

livro.editora = "Typographia Nacional";

console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Todas as chaves:", Object.keys(livro));
console.log("Todos os valores:", Object.values(livro));
console.log("Entradas (pares chave/valor):", Object.entries(livro));
