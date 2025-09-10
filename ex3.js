
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



let contador = 0;

while (contador < 20) {
    console.log(contador);
    contador += 2;
}



const nomes = ['Fernando', 'Jeovana', 'Luiz', 'Yasmim'];

for (const nome of nomes) {
    console.log(nome);
}


const pessoa = {
"nome": "Carlos",
"idade": 28,
"cidade": "Rio Grande do Sul"
}
for (const chave in pessoa) {
    console.log(chave + ":", pessoa[chave]); ;
}