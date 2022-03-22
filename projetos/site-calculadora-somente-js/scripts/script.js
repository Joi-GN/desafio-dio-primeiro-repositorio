function calculator(){
    const operation = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - substração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    if(!operation || operation >= 7){
        alert('Erro! Operação inválida!');
        calculator();

    }else{
        let num1 = Number(prompt('Insira o primeiro valor:'));
        let num2 = Number(prompt('Insira o segundo valor:'));
        let result;   

        if(!num1 || !num2){
            alert('Erro! Insira os valores!');
            calculator();
        }else{

            function soma(){
                result = num1 + num2;
                alert(`${num1} + ${num2} = ${result}`);
                newOperation();
            }

            function substracao(){
                result = num1 - num2;
                alert(`${num1} - ${num2} = ${result}`);
                newOperation();
            }

            function multiplicacao(){
                result = num1 * num2;
                alert(`${num1} * ${num2} = ${result}`);
                newOperation();
            }

            function divisaoReal(){
                result = num1 / num2;
                alert(`${num1} / ${num2} = ${result}`);
                newOperation();
            }

            function divisaoInteira(){
                result = num1 % num2;
                alert(`O resto da divisão inteira entre ${num1} e ${num2} é igual a ${result}`);
                newOperation();
            }

            function potenciacao(){
                result = num1 ** num2;
                alert(`${num1} elevado à ${num2} é ${result}`);
                newOperation();
            }

            function newOperation(){
                let option = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if(option == 1){
                    calculator();
                }else if (option == 2){
                    alert('Fechando...');
                }else{
                    alert('Digite uma opção válida!');
                    newOperation();
                }
            }
        }
    }

    switch(operation){
        case 1:
            soma();
            break;
        case 2:
            substracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}

calculator();