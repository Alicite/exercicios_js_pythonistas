
for (let i = 1; i <= 10; i+=1) {
    console.log(i);
}



let contador = 0;

while (contador < 21) {
    console.log(contador);
    contador += 2;
} 



let nomes = ['Fernando', 'Jeovana', 'Luiz', 'Yasmim'];

for (let nome of nomes) {
    console.log(nome);
}


let pessoa = {
nome: "Carlos",
idade: 28,
cidade: "Rio Grande do Sul"
}
for (let chave in pessoa) {
    console.log(chave + ":", pessoa[chave]); ;
}