# Javascript Assíncrono
*Assíncrono* -  que não ocorre ou não se efetiva ao mesmo tempo;  
*Síncrono* - você executa um código, e o reultado é retornado assim que o navegador puder.
![](https://miro.medium.com/max/1400/1*fyV3Ko2wl_VKGJBxcHk4hA.png)

> #### **! NOTA**
> O Javascript roda de maneira síncrona  

## Promises
Objeto de processamento assíncrono;  
Pode ter 3 estados:  
1. Pending 
2. Fulfilled 
3. Rejected

![](https://bitsofco.de/content/images/2016/06/Creating-Promises.png)
![](https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png)
![](https://media.prod.mdn.mozit.cloud/attachments/2014/09/18/8633/51a934a714e191f53e588bff719bc321/promises.png)

### Async/await
Await - operador específico para lidar com Promises;
É necessário utilizar o operador await para obter o resultado de uma Promise;
Funções assíncronas precisam de `async` e `await`;  

```js
async function resolvePromise() {
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((e) => console.log(e.message));

    return resolved;
}

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"
```
Funções assíncronas retornam promises;  
Pode-se utilizar o try..catch;

## APIs
acrônimo para Application Programming Interface;  
Interface que possibilita a comunicação entre plataformas;  
Forma de intermediar os resultados do back-end com o que é apresentado no front-end;  
É possível acessá-las através de URLs;  

### JSON
JavaScript Object Notation;  
Formato de troca de informações, muito utilizado na comunicação de front-end com APIs;  
APIs retornam seus dados no formato .json, portanto precisamos tratar esses dados quando os recebermos;  

## fetch()
Método fetch;  
Precisa utilizar o await quando for utilizar o fetch;  

```js
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

//retorna uma Promise
```