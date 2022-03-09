# Debugging e Error Handling
## Tipos de erros
### ECMAScript Error  
Erros que ocorrem em tempo de execução;  
Este erro pode ocorrer quando por exemplo algo não foi declarado, faltou algum ponto e vírgula, etc.
>Composto por: Mensagem, Nome, Linha, Call Stack  

### DOMException
Erros relacionados ao DOM;  

## Tratando os erros
### Throw
Parecido com o return, porém o `throw` *lança* um erro, já o `return` *retorna* um valor.

### Try... catch
Dentro do bloco `try` são executadas instruções e caso ocorra algum erro durante o processo, ele será tratado no bloco `catch`;  
O bloco `catch` é executado apenas quando ocorre um erro e possibilita a manipulação de um objeto Eror;  

### Finally
A declaração `finally` não é obrigatória;  
É executada após a execução do bloco `try`, independente de erros ocorrerem ou não;  

```js
try{
    try_declaracoes
}
[catch(e){
    catch_declaracoes
}]
[finally{
    finally_declaracoes
}]
```

### Objeto Error
O objeto `Error` é criado geralmente com a intenção de lançá-lo com `throw`;  

```js
new Error (message, fileName, lineNumber)
// todos os parâmetros são opcionais

const NovoErro = new Error();
NovoErro.name = 'Novo Erro';
NovoErro.message = 'Este erro nunca ocorreu'

throw NovoErro; //Novo Erro: Este erro nunca ocorreu

const meuErro = new Error('Mensagem Inválida');
meuErro.name = 'InvalidMessage';

throw meuErro; //InvalidMessage: Mensagem Inválida
```

## Links Úteis
- [Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instaceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try..catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)