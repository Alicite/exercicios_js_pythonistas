let cores =  ['Amarelo', 'Roxo','Azul'];
cores.push('Rosa');
cores.unshift('Amarelo');
console.log(cores);
cores.shift()
cores.pop()
console.log(cores);



let livro = {
    titulo: 'O Senhor dos Anéis',
    autor : 'j.R.R. Tolkien',
    anoPublicacao: 1954
};
livro.genero = 'Fantasia';
console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(Object.keys(livro));
console.log(Object.values(livro));