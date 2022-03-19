# Funções
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

## Parâmetros
Funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função;
Os parâmetros são colocados dentro dos parênteses "()";  

>## ! Valores padrão  
> se não for atribuido um valor para o parâmetro podem ser definidos um valor padrão;  
>Como o valor padrão pode ser definido, pós ECMAScript2015:
```js
function exponencial (array, num = 1){

}  
// se "num" for undefined, ele tem valor padrao de 1
```
>## Objeto "arguments"  
>O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.

>## Técnica de Spread (...)
>Uma forma de lidar separadamente com elementos, utilizada quando chama a função:
```js
nomeDaFuncao(x,y,z)
array = [1,2,3]

nomeDaFuncao(...array)
//o que era parte de um array se torna um elemento independente
``` 

>## Técnica de Rest (...)
>combina os argumentos em um array;  
>o que era um elemento independente se torna parte de um array;
>utilizado quando está declarando a função:
```js
function confereTamanho(...args){
console.log(args.length)
}
```

## Função declarativas
Declaradas usando a palavra `function` seguida do nome da função, parênteses e chaves;  
O nome da função é obrigatório;

## Expressões de Funções
São funções atribuídas à expressões;   
A nomeação das funções por expressão é opcional, no caso do nome ser omitido a função torna-se uma **função anônima**;  
Uma variável pode armazenar uma função:
```js
var funcao = function nomeDaFuncao(){};

var funcao2 = function(){} //função anônima
```

## Função autoinvocável
IIFE (Immediately Invoked Function Expression);  
Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.
Também pode ser utilizadoss parâmetros ou armazenar o resultado em uma variável;
```js
(function(){
    declaracao
}
)();
```
## Arrow Function
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
>## Restrições das Arrow functions!  
>NÃO faz hoisting;  
>O "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;  
>Não existe o objeto "arguments";  
>O construtur (ex: new MeuObjeto()) não pode ser utilizado.

## Callbacks
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