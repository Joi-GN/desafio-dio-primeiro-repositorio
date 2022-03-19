# Módulos
Arquivos JavaScript que tem capacidade de exportar e importar informações de outros arquivos do mesmo tipo;  
Módulos estão em "strict mode";  
Podem ser utilizadas as extensões `.js` e `.mjs`.  

![](https://swastikyadav.com/static/03231c1ee06866bf976861c317b3cf7b/53f65/banner.png)

## Vantagens
- Organização do código;
- Compartilhamento de variáveis em escopos diferentes;
- Explicita as dependências dos arquivos.

![](https://miro.medium.com/max/1200/1*GpS8sOvkhbj-NIXNtM084g.png)

## Exports
- ### Named exports  
As duas formas de exportar abaixo são equivalentes
```js
export function test(name){
    return `Oi ${name}!`;
}

export function test2(name){
    return `Tudo bom, ${name}?`;
}
```
```js
function test(name){
    return `Oi ${name}!`;
}

function test2(name){
    return `Tudo bom, ${name}?`;
}

export {
    test,
    test2
}
```

- ### Default exports  
Só pode haver um por arquivo;  
Será o retorno padrão do seu arquivo.  
```js
export default teste2;
```

## Imports
Ao importar é necessário utilizar "./" e sempre lembrar da extensão (.js, .mjs)

- ### Named exports  
```js
import {funcao, variavel, classe} from './arquivo.mjs';
```

- ### Default exports  
```js
import valorDefault from './arquivo.mjs';
```

- ### Trocando nomes de imports
Utilizando `as`;
```js
import {arquivo as Apelido} from './arquivo.mjs';
Apelido.metodo();
```

- ### Importando todos os dados de um arquivo
Utilizando `*`;
```js
import * as INFOS from './arquivo.mjs';
INFOS.metodo();
```

## Vinculando ao HTML
Importante especificar o tipo, dizendo que é um módulo;
```html
<script type="module" src="./main.mjs"></script>
```