// ## Exercício 1: Variáveis e Tipos de Dados

// **Objetivo:** Praticar a declaração de variáveis com `let` e `const` e identificar tipos de dados em JavaScript.

// 1. Declare uma variável `nome` usando `let` e atribua a ela o seu nome.

// 1. Declare uma constante `anoNascimento` usando `const` e atribua a ela o seu ano de nascimento.

// 1. Calcule a sua idade e armazene-a em uma variável `idade` usando `let`.

// 1. Declare uma variável `isEstudante` e atribua a ela um valor booleano (`true` ou `false`).

// 1. Imprima no console o valor e o tipo de cada uma dessas variáveis usando `console.log()` e o operador `typeof`.

// **Exemplo de Saída Esperada:**

// ```
// Nome: [Seu Nome] (string)
// Ano de Nascimento: [Seu Ano] (number)
// Idade: [Sua Idade] (number)
// É Estudante: [true/false] (boolean)
// ```

// 1. Declarando uma variável nome
let nome = "Nicolas";

// 2. Declarando uma constante com o ano de nascimento
const anoNascimento = 2003;

// 3. Calculando a idade
let anoAtual = 2025; // pega o ano atual automaticamente
let idade = anoAtual - anoNascimento;

// 4. Declarando variável booleana
let isEstudante = true;

// 5. Exibindo no console os valores e seus tipos
console.log("Nome: " + nome + " (" + typeof nome + ")");
console.log("Ano de Nascimento: " + anoNascimento + " (" + typeof anoNascimento + ")");
console.log("Idade: " + idade + " (" + typeof idade + ")");
console.log("É Estudante: " + isEstudante + " (" + typeof isEstudante + ")");
