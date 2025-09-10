const titulo = document.getElementById('titulo-dom');
titulo.textContent = 'DOM Manipulado!';
const paragrafo = document.querySelector('.texto-paragrafo');
paragrafo.classList.add('destaque');
const botao = document.getElementById('botao-mudar-texto');
botao.addEventListener('click', () => {
  paragrafo.textContent = 'Texto alterado pelo clique!';
});
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este é um novo parágrafo criado via JS!';
const container = document.getElementById('container-novo-elemento');
container.appendChild(novoParagrafo);