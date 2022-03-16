# Map, Filter e Reduce
3 métodos que manipulam o valor de um array : Map, Filter e Reduce.  

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

### Map vs forEach
ForEach precisa de uma constante para ter o retorno do valor, senão retorna `undefined`;  

## Filter
Percorre um array e retorna outro contendo somente os itens que passaram por determinada validação;

>### Sintaxe
>```js
>array.filter(callback, thisArg)
>```

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