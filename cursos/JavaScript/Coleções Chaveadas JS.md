# Coleções chaveadas
## Map
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

## Set
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