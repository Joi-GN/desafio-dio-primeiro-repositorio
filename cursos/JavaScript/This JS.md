# This
Palavra reservada que referencia o contexto;  
Seu valor pode mudar de acordo com o lugar no código onde foi chamada:
|Contexto|Referência|
|-|-|
|Em um objeto(método)|Próprio objeto dono do método|
|Sozinha|Objeto global|
|Função|Objeto global|
|Evento|Elemento que recebeu o evento|

## Manipulando o valor de THIS
### Método call
Transforma o valor de this no do objeto enviado como primeiro parâmetro e aceita outros parâmetros separados por vírgulas.  
É reutilizável em outros objetos.  

### Método apply
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
### Método bind
Cria um clone da função na qual for invocado, designando a this o valor do objeto passado como parâmetro

>Sempre que uma função está dentro de um objeto, se chama método.