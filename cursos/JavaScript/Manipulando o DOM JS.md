# Manipulando o DOM
## DOM
Document Object Model;  
Estrutura dos elementos dentro da janela;  
É um padrão de como acessar e modificar elementos HTML de uma página;

Com o HTML DOM, o JavaScript pode acessar e mudar elementos do documento HTML;  
![](https://www.w3schools.com/js/pic_htmltree.gif)

- [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

### DOM VS BOM
DOM é a árvore de dependências do HTML, enquanto o BOM é a árvore de dependências do Browser
>#### BOM 
>Browser Object Model
>Tudo que está dentro do objeto window.
>![](https://snipcademy.com/img/articles/javascript-browser-object-model/bom.svg)

## Métodos
### Selecionando elementos de uma página
```js
document.getElementById('titulo'); //pega os elementos de id titulo 
document.getElementsByClassName('botao'); //pega os elementos de classe .botao
document.getElementsByTagName('h1'); //pega os elementos com tag h1
document.querySelectorAll('.botao'); //pega os elementos de classe .botao
document.querySelectorAll('li .item'); //pega os elementos de tag li e classe .item
```
### Adicionar e deletar
|Método|Descrição|
|-|-|
|document.createElement(element)|Cria um novo elemento HTML|
|elementoPai.removeChild(element)|Remove um elemento filho de um elemento existente|
|elementoPai.appendChild(element)|Adiciona um elemento filho a um elemento existente|
|elementoPai.replaceChild(new,old)|Substitui um elemento|

### Classes
```js
const MyElement = document.getElementById('titulo');

MyElement.classList.add('novo-estilo'); //add a classe novo-estilo ao elemento
MyElement.classList.remove('novo-estilo'); //remove a classe novo-estilo ao elemento
MyElement.classList.toggle('dark-mode'); //add a classe dark-mode ao elemento caso não faça parte da lista e remove caso faça
```

### CSS
```js
document.getElementByTagName('p').style.color = 'blue'; //muda a cor do elemento com tag p para azul
```

### Eventos
- mouseover
- mouseout
- click
- dbclick
- change
- load

### Event Listener
Podem ser programados via JavaScript adicionando listeners aos elementos do DOM ou adicionando diretamente em tags no HTML.

>JS  
No arquivo js, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação
>```js
>const botao = document.getElementById('botao');
>botao.addEventListener('click', função);
>```

>HTML  
>No arquivo HTML, especifica a função a ser chamada no elemento
>```html
><h1 onclick="mudaTexto(this)"> Clique aqui </h1>
><script> function mudaCor(id){
>    id.innerHTML = "Mudei!"
>}
></script>
>```

- [addEventListener()](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)

