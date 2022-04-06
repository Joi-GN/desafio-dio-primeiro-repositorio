# Objetos em JavaScript
- Parecidos com arrays, porém ao invés de índices para acessar seus dados, nos objetos utilizamos as propriedades;   
- Deve ser declarado entre chaves “{}”;  
- É composto de vários membros, cada um  com um nome(key) e um valor(value). Cada par nome/valor deve ser separado por uma vírgula e o nome e valor, em cada caso, separados por dois pontos;  
- O valor pode ser uma string, um número, arrays, functions e etc;  
- Valores do tipo functions são chamadas de métodos do objeto, pois permitem que o objeto faça algo com os dados;  
- Os demais são data items e são chamadados de propriedades do objeto;  

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

###  Acessando as propriedades dos objetos
>- Notação de ponto/dot notation (.)
>- Notação de colchetes/bracket notation []

```js
var nomeGato = cat.name; //notação de ponto; utilizado quando já se sabe o nome da propriedade que quer acessar;

cat["enemies"]; //notação de colchetes; quando a propriedade tem espaço no nome deve-se utilizar notação de colchetes e aspas;
```
### Atualizando propriedades
```js
cat.name = "Flocos";
```

### Adicionando propriedades
```js
cat.color = "White";
```

### Deletando propriedades
```js
delete cat.color;
```

### Checando propriedades
```js
cat.hasOwnProperty("color"); //returns false
cat.hasOwnProperty("name"); //returns true
```

## Object Destructuring
Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

- [Objetos em JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Desestruturação de Obj](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)
