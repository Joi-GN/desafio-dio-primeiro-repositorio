# Introdução ao JavaScript
- Leve; 
- Interpretada; 
- Baseada em Protótipos; 
- Multiparadigma; 
- Comumente utilizada em aplicações web client-side; 
- Segue o padrão ECMAScript;

## Aplicações
- Web, Mobile, Smartwatches, Games, IOT, APIs;
- Também utilizada no back-end.

>### [Evoluções do JavaScript](https://medium.com/jaguaribetech/javascript-evolução-e-especificações-bb3c218e15e1)
>### [Glossário - JavaScript](https://developer.mozilla.org/pt-BR/docs/Glossary/JavaScript)
>### [O que é JS?](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

## Declaração de variáveis
Existem 3 modos:  
**var** – escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null; É possível redeclarar e reatribuir.

**let** – escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null; Não se pode redeclarar mas pode-se reatribuir uma let;  

**const** – escopo local de bloco, somente leitura, o valor inicial é
obrigatório e não pode ser alterado.  
São declaradas em SNAKE_UPPER_CASE (Boas práticas); Não se pode redeclarar e nem reatribuir uma constante; 

>**Escopo**  
Define a limitação e visibilidade de um bloco de código.  
**Escopo global** – quando a variável é declarada fora de qualquer
bloco, sua visibilidade fica disponível em todo o código.  
**Escopo local** – quando a variável é declarada dentro de um bloco,
sua visibilidade pode ficar disponível ou não.  

>**! Regra de Uso de Variáveis !** 
>- Iniciar com letras, underscore _ ou cifrão $; Não iniciar com número;
>- Não usar espaços (use o camelCase ou _);
>- Não usar palavras reservadas;
>- Declarar variáveis no topo do bloco de código.

>Hoisting   
>atribuir um valor a uma variável antes de declarar a variável; funciona com var;

|Atribuição|Comparação|Comparação idêntica|
|-|-|-|
|=|==|===|

|Aritméticos|Relacionais|Lógicos|
|-|-|-|
|+ adição|> maior q| && "e"
|- subtração|< menor q| "ou" ||
|* multiplicação|>= maior ou igual q| ! "não"
|/ divisão real|<= menor ou igual q|
|% divisão inteira/módulo|!= diferente|
|** potenciação|!== valor e tipos diferentes|
|++ incrementar|
|-- decrementar|

## Tipos de dados
### Tipagem
A tipagem funciona como uma regra de uso de dados, quanto
mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado.  
A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico, ou seja, antes de declarar um dado, não se especifica o tipo dele.  
Para conferir o tipo de dado pode-se digitar:   
**typeof "variavel"**   
dessa forma irá retornar qual o tipo de dado da variavel indicada.  

>Tipos primitivos  
As variáveis em JavaScript podem guardar tipos de dados que
chamamos de tipos primitivos;  
![](https://miro.medium.com/max/724/1*huFzN8Wj0AI3-i1wGrU_kQ.png)

|String|Number|Boolean|Array|Objects|
|-|-|-|-|-|
|Comumente utilizada para textos |Números decimais e inteiros|True or False|Lista iterável de elementos|Estrutura do tipo "chave e valor"|
Valores declarados entre aspas ou crases|**Math.**||**nomeDoArray.**|**Objects.**|
Iterabilidade, Formatação, Index de letras||||
**nomeDaVariavel.**

## Manipulando Arrays
- forEach() – itera um array;
- push() – add item no final do array;
- pop() – remove item no final do array;
- shift() – remove item no início do array;
- unshift() – add item no início do array;
-indexOf() – retorna o índice de um valor;
- splice() – remove ou substitui um item pelo índice;
- slice() – retorna uma parte de um array existente;

## Objetos
Dados que possuem propriedades e valores que definem suas
características.   
Deve ser declarado entre chaves “{}”.

### Object Destructuring
Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

- [Objetos em JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Desestruturação de Obj](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)

## Empty, null e undefined
*empty*:  
representa que está vazio, por exemplo:   
let nomeDaString = " " // declaramos uma string vazia.  
let nomeDoArray = [ ] // declaramos um array vazio.

*null*:  
representa uma ausência **intencional** de um valor, ou seja, o programador induz o null no código.

*undefined*:  
recebemos quando uma variável **não teve um valor atribuído previamente**.

```js
console.log (null == undefined); // true  
console.log (null === undefined); // false

console.log ("" == null); // false  
console.log ("" == undefined); // false  
console.log ("" === null); // false  
console.log ("" === undefined); // false  
```

> ! OBS !  
> **!true** = engloba null, undefined e false

- [NULL VS UNDEFINED VS EMPTY in JS](https://code-boxx.com/javascript-null-vs-undefined-vs-empty/)

## Estruturas de decisão
>### if
>Palavra reservada para estabelecer uma condição;  
`if(condicao){declaracao}`

>### else
>Se a condição não for atendida;  
`if(condicao){declaracao}else{declaracao se condicao for falsa}`

>### else if
>Se houver mais uma condição;  
`if(condicao1){declaracao1}else if(condicao2){declaracao2} else{declaracao se condicao 1 e 2 forem falsas}`

>### ninho de if
>Quando se tem um "if" dentro de outro "if";  
>Aninhamento de if's;   
`if(){if(){else{}}}`

>### if ternário
>Verificação em uma única linha;  
`[condição] ? [instrução1] : [instrução2];`

>### Switch/Case
>Equivale a uma comparação de tipo e valor (===);  
>Sempre precisa de um valor "default";  
>Ideal para quando se precisa comparar muitos valores;
>![](https://miro.medium.com/max/1400/1*vcq2v67WM3XNxRxLHrcP8g.png)

## Estruturas de repetição / Laços de repetição
> ### for
>Loop dentro de elementos iteráveis (arrays,strings);  
>Repetição de instrução até que a condição seja falsa.  
```for([expresaoInicial];[condicao];[incremento]){declaracao}```

>### for/in
>Loop entre propriedades enumeráveis de um objeto;  
>Repetição a partir de uma propriedade.    
```for([indice]in[objeto ou array]){declaracao}```

>### for/of
>Loop entre estruturas iteráveis (arrays, strings);  
>Não funciona com objetos;  
>Repetição a partir de um valor.  
```for([indice]of[array]){declaracao}```

>### while
>Executa instruções até que a condição se torne falsa;
>A verificação é feita antes da execução.  
```while(condicao){declaracao}```
>### do/while
>Executa instruções até que a condição se torne falsa, *porém a primeira execução sempre ocorre*;
>A verificação é feita depois da execução.  
```do{declaracao}while(condicao)```

## Funções
São blocos de comandos e instruções para a execução de determinadas tarefas;  
Para declarar uma função, utiliza-se a palavra reservada `function` seguida de parênteses e chaves:
```js
function nomeDaFuncao(){
    ${instrucao};
    } //declarar a função

nomeDaFuncao() //chamar a função
```  
> Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela;  
> Quando invocamos o "return", a função para de ser executada;  

### Parâmetros
Funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função;
Os parâmetros são colocados dentro dos parênteses "()";  

>### ! Valores padrão  
> se não for atribuido um valor para o parâmetro podem ser definidos um valor padrão;  
>Como o valor padrão pode ser definido, pós ECMAScript2015:
```js
function exponencial (array, num = 1){

}  
// se "num" for undefined, ele tem valor padrao de 1
```
>### Objeto "arguments"  
>O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.

>### Técnica de Spread (...)
>Uma forma de lidar separadamente com elementos, utilizada quando chama a função:
```js
nomeDaFuncao(x,y,z)
array = [1,2,3]

nomeDaFuncao(...array)
//o que era parte de um array se torna um elemento independente
``` 

>#### Técnica de Rest (...)
>combina os argumentos em um array;  
>o que era um elemento independente se torna parte de um array;
>utilizado quando está declarando a função:
```js
function confereTamanho(...args){
console.log(args.length)
}
```

### Função declarativas
Declaradas usando a palavra `function` seguida do nome da função, parênteses e chaves;  
O nome da função é obrigatório;

### Expressões de Funções
São funções atribuídas à expressões;   
A nomeação das funções por expressão é opcional, no caso do nome ser omitido a função torna-se uma **função anônima**;  
Uma variável pode armazenar uma função:
```js
var funcao = function nomeDaFuncao(){};

var funcao2 = function(){} //função anônima
```

### Função autoinvocável
IIFE (Immediately Invoked Function Expression);  
Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.
Também pode ser utilizadoss parâmetros ou armazenar o resultado em uma variável;
```js
(function(){
    declaracao
}
)();
```
### Arrow Function
Funções de expressão de sintaxe curta;  
Sempre serão anônimas;  
Declarada com parênteses seguido de "=>" e chaves:
```js
var funcao = () =>{
    declaracao
};

ex: 
// expression function
const helloWorld = function(){
    return "Hello World";
} 

//arrow function
const helloWorld = () => "Hello World"; 
```
>Caso exista apenas uma linha, pode dispensar as chaves e o return; 

>Caso exista apenas um parâmetro, pode dispensar os parênteses.

```js
const soma = (a,b) => a + b;
soma(4,6); //10

const soma = a => a;
soma(4); //4
```
>### Restrições das Arrow functions!  
>NÃO faz hoisting;  
>O "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;  
>Não existe o objeto "arguments";  
>O construtur (ex: new MeuObjeto()) não pode ser utilizado.

### Callbacks
Uma função passada como argumento para outra.  
```js
const calc = function(operacao,num1,num2){
    return operacao(num1,num2);
}

const soma = function(num1,num2){
    return num1 + num2;
}

const resultSoma = calc(soma,1,2);//callback da função soma
console.log(resultSoma); //3
```

## This
Palavra reservada que referencia o contexto;  
Seu valor pode mudar de acordo com o lugar no código onde foi chamada:
|Contexto|Referência|
|-|-|
|Em um objeto(método)|Próprio objeto dono do método|
|Sozinha|Objeto global|
|Função|Objeto global|
|Evento|Elemento que recebeu o evento|

### Manipulando o valor de THIS
#### Método call
Transforma o valor de this no do objeto enviado como primeiro parâmetro e aceita outros parâmetros separados por vírgulas.  
É reutilizável em outros objetos.  

#### Método apply
Transforma o valor de this no do objeto enviado como primeiro parâmetro e aceita outros parâmetros através de um array.  
É reutilizável em outros objetos.  

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

const pessoa = {
    nome: "Anne",
    idade: 17,
};

const animal = {
    nome: "Bolinha",
    idade: 3,
};

console.log(calculaIdade.call(pessoa,15));
console.log(calculaIdade.apply(animal,[3]));
```
#### Método bind
Cria um clone da função na qual for invocado, designando a this o valor do objeto passado como parâmetro

>Sempre que uma função está dentro de um objeto, se chama método.

## Coleções chaveadas
### Map
Uma coleçãp de arrays no formato [chave,valor];  
Pode ser iterado por um loop for/of;

```js
//Método map() - Cria um novo Map
const myMap = new Map(); //cria um novo Map chamado myMap

//Método .set(key,value) - Adiciona novos dados
myMap.set("yellow", "color"); // Map(1) {"yellow" => "color"}

//Método .get(key) - Retorna o valor associado à chave, ou undefined se não há nada
myMap.get("yellow"); // "color"

//Método .delete(key) - Deleta o valor
myMap.delete("yellow"); // true
```

>### Map vs Objeto
>Maps podem ter chaves de qualquer tipo;  
>Maps possuem a propriedade length;  
>Maps são mais fáceis de iterar;  
>Utilizado quando o valor das chaves é desconhecido;  
>Os valores tem o mesmo tipo.

### Set
Estruturas que armazenam apenas valores únicos

```js
//Método set() - Cria um novo Set
const mySet = new Set(); // Cria um novo Set chamado mySet

//Método .add() - Adiciona o  novo valor especificado
mySet.add(2); 
mySet.add(4);

//Método .has() - Verifica se o set contém o valor especificado
mySet.has(2); //true
mySet.has(3); //false

//Método .delete() - Deleta o valor especificado do set
mySet.delete(4);
```
>### Set vs Array
>Sets possuem apenas valores únicos;  
>Nos sets, em vez da propriedade length, consulta-se o número de registros pela propriedade `size`;  
>Não possui os métodos map, filter, reduce, etc.  

## DOM
Document Object Model;  
Estrutura dos elementos dentro da janela;  
Com o HTML DOM, o JavaScript pode acessar e mudar elementos do documento HTML;  

![](https://www.w3schools.com/js/pic_htmltree.gif)

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)


- [Material de apoio](https://github.com/stebsnusch/basecamp-javascript)
- [Material de apoio](https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript)