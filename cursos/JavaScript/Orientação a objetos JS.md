# Orientação a objetos
## OOJS 
Object Oriented JavaScript / JavaScript Orientado A Objetos

## Paradigmas
Os programas são "objetos" que possuem uma série de propriedades;  
![](https://miro.medium.com/max/724/1*Auy48pC39ps3AXEk-9WseA.png)

## Pilares
- Herança
- Polimorfismo
- Encapsulamento
- Abstração

> ### Herança
> Classes descendentes herdam características de suas classes ascendentes.

> ### Polimorfismo
> Classes mais complexas herdam métodos de classes mais abstratas e os executem à sua maneira.  

> ### Encapsulamento
> Cada classe tem propriedades e métodos independentes do restante do código;  
> Propriedades e métodos de uma classe dizem respeito apenas a ela.  

> ### Abstração
> Tornar simples uma coisa mais complexa; pegando os aspectos mais importantes.

![](https://lh3.googleusercontent.com/JWGejWy-5UEIY4S3q6FNXkq3b7H0PbECFGRFiOlE3rDsvqY2c3yaTPwXxlhes7NNcz77vfBSs2nFME6GNEP9kDajiGD62-bjE3YxFQX2Jyr4Cs40IDTE4fNWFc9JHUfXgi_SbsHvCPEncJA1Fk_MH5rqCtMEEp-YIWFT2X5EBXAup910lnt_HqTB7MAR-Ipgx_gIN-WejB8q1p3x3goAK-fhykFYNnRvcLO0hJhQDb6niwYET13BlHgvehiFaESb9R9LJ4Uq_9iyaBrqisZBmWN45PIOggWbcqWiZf1tFo6_Ah-o00SAEey_MwdwpntmzZi7kBZA4gq2ibHmakHCq2t_i8760yenwMPPhrk7unDNiMHnqp3fYxjzOvNTc-NKxOl-1oJFbiwdyNU_TwccbfsGhCwtJg8tQmVbtTSdy_Vv-FUayhc0CPQiDHirDNwCkqRX5oWHkfcMfynVNyERU-weB-5J7ReTRUgWsfKe60BfQx1emhwjJ0wI_0rmlN4RN_2MjDEz3cwSUgVUmZw1z1JzYoHy8A0Uz_VWIi0Y59ysAnYXVekqwqp7jNtmsfMrtoemq1caDe7J4EQ3u8iVa5YbUk8d4ijud9e-AU1urV0EbFIn-xYrtIYZFWRf_yuK5Sqap7e89CiBd6tq9sHLteR3201C_Pcy0vsQmWwfZA=w759-h341-no)

## Protótipos
Esqueleto de todos os objetos;
O objeto Object.prototype está no topo da cadeia;  
Todos os objetos JS herdam propriedades e métodos de um prototype;  

### Cadeia de protótipos (prototype chain)
![](https://lh3.googleusercontent.com/Ie7W5tqMOWICPnqSRIBksRmmfr8NGJbZ4r93oUGN_u-JxnJcFhQB60bDZDxV0gd9HdQpjSwq8XIcj8rXJrR6ivzc-Z1jsI-wljf873uGJONSe47-PkV1oB0C33ZF11yKkpIzyBhPFz4ZSWIED1w-VloXoafyxR5Xv0VL7TgmgRo9psFF1sI9oknV1qbPWNgrrvDjVJSholHkuCp5Cdnvj2t7xCLaChPFKe6wg7PsIJ58-RS_kHTBpR98XQvsPWhWTB7MVD9K8o5cw508Hcjvfgbl6RIpHCfYNOAz9DpWYyV0ekJX6oAt6hlL34OLoizipotSe2eWwz8B3EEd7YIYzmjEJW9ZfOMEkCPVTjYOnuF-RUvShhqwvV-yAcAwF2Y5LTyzoQnTt6VbxNT5lB5kH_gX3czTcxDa-BblwR_nL55_y8KiMU7SlV58VN3CFY4VC5oU9eeL9HlEmWDR7sZmPHEHxbEzTYiQqseE0_out0AbwO5KmfEN4X1Zw6NHvSoDyh1f3sa7mpyZBzBIxK5pvcQFQtvcRGySzrJYDZYmdGaIl53LfUhgpojZDLZNFFREJupIPtXVkqKkBI-LhlbmW6wW_xDlFcca9SNVWyrFSmd4Fw5qoQBFC-NuaF1HIeYZ8Sn0rYJ4n-16w-ShYkyPU3u59A7VmtTO_MevLdaZQQ=w759-h364-no)

## Classes
Javascript não possui classes nativamente;   
Syntatic sugar: uma sintaxe feita para facilitar a escrita;  
Todas as classes são objetos e a herança se dá por protótipos.

![](https://linuxhint.com/wp-content/uploads/2021/08/word-image-1.jpeg)

```js
class Animal {
    constructor(type='animal'){
        this.type
    }

    get type(){
        return this._type
    }

    set type(val){
        this._type = val.toUpperCase()
    }

    makeSound(){
        console.log('Making animal sound')
    }
}

let a = new Animal()
console.log(a.type) //Animal


class Cat extends Animal{
    constructor(){
        super('cat')
    }

    makeSound(){
        super.makeSound()
        console.log('Meow')
    }
}

let b = new Cat()
console.log(b.type) //Cat
```

### Construtor 

### Getter e Setter
São utilizados como modificadores de um valor;  
Case um parâmetro tenha getters e setters, por convenção se usa o underline `_`como prefixo (ex: _type);  

### super()
O método super() pode ser utilizado em classes que herdam propriedades de outras;  
Passa os argumentos enviados para a classe ascendente;   

## Links Úteis
- [Advanced JS Objects and Functions](http://dannyzhang.run/2017/04/06/Advanced-JavaScript-Objects-and-Functions/)