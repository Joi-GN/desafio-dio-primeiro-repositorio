var contador = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    if (contador < 10){
        contador++;
        CURRENT_NUMBER.innerHTML = contador;
    }
    if (contador >= 0){
        CURRENT_NUMBER.style.color = 'black';
    }
}

function decrement(){
    if (contador > -10){
        contador--;
        CURRENT_NUMBER.innerHTML = contador;
    }
    if (contador < 0){
        CURRENT_NUMBER.style.color = 'red';
    }
}

function reiniciar(){
    contador = 0;
    CURRENT_NUMBER.innerHTML = contador;
    if (contador < 0){
        CURRENT_NUMBER.style.color = 'red';
    }else{
        CURRENT_NUMBER.style.color = 'black';
    }
}