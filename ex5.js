const cores = ['vermelho', 'verde', 'azul'];
cores.push('amarelo');
cores.shift();
console.log(cores);

const livro = {
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  anoPublicacao: 1954
};
livro.genero = 'Fantasia';
console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(Object.keys(livro));    
console.log(Object.values(livro));