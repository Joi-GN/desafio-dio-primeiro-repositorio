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
- [Outros Métodos](https://www.w3schools.com/jsref/jsref_obj_array.asp)

## Objetos
Parecidos com arrays, porém ao invés de índices para acessar seus dados, nos objetos utilizamos as propriedades;   
Deve ser declarado entre chaves “{}”;  
É composto de vários membros, cada um  com um nome(key) e um valor(value). Cada par nome/valor deve ser separado por uma vírgula e o nome e valor, em cada caso, separados por dois pontos;  
O valor pode ser uma string, um número, arrays, functions e etc;  
Valores do tipo functions são chamadas de métodos do objeto, pois permitem que o objeto faça algo com os dados;  
Os demais são data items e são chamadados de propriedades do objeto;  

```js
const cat = {
  "name": "Whiskers", 
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"],
  "greeting": function() {
    console.log('Meow!');
  }
}; //name, legs, tails e enemies são propriedades. greeting é um método
```

- Acessando as propriedades dos objetos
>- Notação de ponto/dot notation (.)
>- Notação de colchetes/bracket notation []

```js
var nomeGato = cat.name; //notação de ponto; utilizado quando já se sabe o nome da propriedade que quer acessar;

cat["enemies"]; //notação de colchetes; quando a propriedade tem espaço no nome deve-se utilizar notação de colchetes e aspas;
```
- Atualizando propriedades
```js
cat.name = "Flocos";
```

- Adicionando propriedades
```js
cat.color = "White";
```

- Deletando propriedades
```js
delete cat.color;
```

- Checando propriedades
```js
cat.hasOwnProperty("color"); //returns false
cat.hasOwnProperty("name"); //returns true
```

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

- [Material de apoio](https://github.com/stebsnusch/basecamp-javascript)
- [Material de apoio](https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript)