# Map, Filter e Reduce
3 métodos que manipulam o valor de um array : Map, Filter e Reduce.  

![](https://www.lambda3.com.br/wp-content/uploads//2017/01/map-filter-reduce-in-emoji-1.png)

## Map
Retorna um novo array;  
Não modifica o array original;  
Realiza as operações em ordem;  
Percorre o array e executa uma função em cada um de seus itens;  

>### Sintaxe
>```js
>array.map(callback, thisArg)
>```
> Callback: função a ser executada em cada elemento;  
> thisArg (opcional): valor de 'this' dentro da função de callback;  

```js
let estudantes = [
    {
        nome: 'Júlia',
        idade: 15,
        sala: 2,
    },
    {
        nome: 'César',
        idade: 15,
        sala: 2,
    },
    {
        nome: 'Bia',
        idade: 14,
        sala: 2,
    },
    {
        nome: 'Pedro',
        idade: 13,
        sala: 1,
    }
]

const nomeEstudantes = estudantes.map((i)=>{
    return i.nome;
})

console.log(nomeEstudantes); //[ 'Júlia', 'César', 'Bia', 'Pedro' ]
```

### Map vs forEach
ForEach precisa de uma constante para ter o retorno do valor, senão retorna `undefined`;  

## Filter
Percorre um array e retorna outro contendo somente os itens que passaram por determinada validação;

>### Sintaxe
>```js
>array.filter(callback, thisArg)
>```

```js
const idadeMaiorQue14 = estudantes.filter((estudante)=>{
    return estudante.idade > 14;
})

console.log(idadeMaiorQue14); //[ { nome: 'Júlia', idade: 15 }, { nome: 'César', idade: 15 } ]

/////////////////////////

let array = [1,2,3,4,5,6,7,8,9,0]

let newArray = array.filter((i) => {
    return i > 5 || i == 0;
})

console.log(newArray); // retorna [ 6, 7, 8, 9, 0 ];
```

## Reduce
Percorre o array e acumula o valor de cada operação para retornar um valor único no final;   
Sempre retorna apenas um valor, que pode ou não ser um array.  

>### Sintaxe
>```js
>array.reduce(callbackFn, initialValue)
>```
> Callback: função a ser executada a partir do acumulador;  
> initialValue - opcional; se não enviar um valor, presume que o valor inicial é o primeiro valor do array;  
> accumulator: acumulador de todas as chamadas de callbackFn;  
> currentValue: elemento atual sendo acessado pela função;  

```js
const somaIdadeEstudantes = estudantes.reduce((total, estudante)=>{ //total é o acumulador
    return total + estudante.idade;
}, 0) //0 é o valor inicial

console.log(`Soma de idades = ${somaIdadeEstudantes}`); //Soma de idades = 57

////////////////////////

let compras = [
    {
        produto: 'óleo',
        qtd: 2,
        preco: 4.30,
    },
    {
        produto: 'doce de leite',
        qtd: 5,
        preco: 10.50,
    },
    {
        produto: 'milho para pipoca',
        qtd: 3,
        preco: 3.90,
    },
    {
        produto: 'pão',
        qtd: 2,
        preco: 5,
    }
]

const totalCompras = compras.reduce((total, compra) =>{
    return {
        totalQtd: total.totalQtd + compra.qtd,
        totalPreco: total.totalPreco + compra.preco
    }
}, {totalQtd: 0, totalPreco: 0});

console.log(totalCompras); //{ totalQtd: 12, totalPreco: 23.7 }
```

## Encadeando as funções
```js
const somaIdadesAlunosde15AnosSala2 = estudantes.filter((estudante) => {
    return estudante.sala === 2;
}).filter((estudante) => {
    return estudante.idade === 15;
}).reduce((total, estudante) =>{
    return total + estudante.idade
},0)

console.log(somaIdadesAlunosde15AnosSala2);// 30
```