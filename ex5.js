
let cores = ['azul', 'verde', 'amarelo'];
cores.push('vermelho');
console.log(cores); 
cores.shift();
console.log(cores);

let livro = { 
    titulo: "Dom Casmurro", 
      autor: "Machado de Assis", 
      ano: 1899 };  

livro.genero = "Romance";

console.log(`titulo: ${livro.titulo}`);
console.log(`autor:', ${livro.autor}`);
console.log(`ano:', ${livro.ano}`);
console.log(`genero:', ${livro.genero}`);

console.log(Object.keys(livro));
console.log(Object.values(livro));